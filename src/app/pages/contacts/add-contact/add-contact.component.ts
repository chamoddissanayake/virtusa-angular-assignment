import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  title = 'Add New Contact';
  subTitle = 'Manage team member roles for BT Accounts and roles - swiftly and instantly';

  showBanner = false;
  bannerStatus = false;
  bannerTitle = '';
  bannerSubTitle = '';

  constructor(private router: Router,public fb: FormBuilder, private userService: UserService, private httpClient: HttpClient) {
  }

  titles: string[] = ["Mr.", "Mrs.", "Miss"];

  profileForm: any;

  ngOnInit(): void {

    this.profileForm = this.fb.group({
      title: ['Mr.', [Validators.required]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("^[0-9]*$")]],
      altEmail: ['', Validators.email],
      marketingPref: ['no', [Validators.required]],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      rePassword: ['', Validators.required]
    }, {validator: this.mustMatch('password', 'rePassword')});
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({mustMatch: true});
      } else {
        matchingControl.setErrors(null);
      }
    }
  }


  onSubmit() {

    if (this.profileForm.status === 'INVALID') {
      alert("Please fill all inputs correctly")
    } else {
      const URL = "http://localhost:3000/users/";

      let newUser = {
        title: this.profileForm.value.title,
        firstName: this.profileForm.value.firstName,
        lastName: this.profileForm.value.lastName,
        email: this.profileForm.value.username,
        mobile: this.profileForm.value.mobile,
        altEmail: this.profileForm.value.altEmail,
        marketingPref: this.profileForm.value.marketingPref
      }

      this.httpClient.post(URL, newUser).subscribe(data => {
        console.log("new user added")
        this.bannerTitle = this.profileForm.value.firstName + ' added';
        this.bannerSubTitle = this.profileForm.value.firstName + ' added successfully';
        this.bannerStatus = true

        this.showBanner = true;
        setTimeout(() => {
          this.showBanner = false;
          // this.router.navigate(['contacts/add']);
        }, 5000);
      });


    }


  }

  changeTitle(e: any) {
    console.log(e);
  }

  backBtnClick() {
    this.router.navigate(['contacts']);
  }
}

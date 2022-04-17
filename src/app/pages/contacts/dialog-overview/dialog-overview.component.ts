import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from '@angular/forms';
import {UserElement} from "../contacts.component";
import {UserService} from "../../../services/user.service";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.scss']
})
export class DialogOverviewComponent implements OnInit {

  currentItem: UserElement;

  showBanner = false;
  bannerStatus = false;
  bannerTitle = '';
  bannerSubTitle = '';

  constructor(public dialogRef: MatDialogRef<DialogOverviewComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public fb: FormBuilder, private matDialog: MatDialog,
              private userService: UserService, private httpClient: HttpClient) {
    this.currentItem = data;

  }

  titles: string[] = ["Mr.", "Mrs.", "Miss"];

  profileForm: any;


  ngOnInit(): void {

    // this.profileForm = this.fb.group({
    //   title: [this.currentItem.title, [Validators.required]],
    //   firstName: [this.currentItem.firstName, Validators.required],
    //   lastName: [this.currentItem.lastName, Validators.required],
    //   mobile: [this.currentItem.mobile, Validators.required],
    //   altEmail: [this.currentItem.altEmail],
    //   marketingPref: ['no', [Validators.required]]
    // });


    this.profileForm = this.fb.group({
      title: [this.currentItem.title, [Validators.required]],
      firstName: [this.currentItem.firstName, Validators.required],
      lastName: [this.currentItem.lastName, Validators.required],
      mobile: [this.currentItem.mobile, [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("^[0-9]*$")]],
      altEmail: [this.currentItem.altEmail, Validators.email],
      marketingPref: ['no', [Validators.required]],
    });


  }

  url: string = '';

  onSubmit() {

    if (this.profileForm.status == 'INVALID') {
      alert("Please fill all fields correctly")
    } else {
      console.log(this.profileForm.value)
      let updateUserData = this.profileForm.value

      this.url = "http://localhost:3000/users/";

      function getMarketingPreference(marketingPref: string) {
        if (marketingPref == 'yes') {
          return true;
        } else {
          return false
        }
      }

      let updatedUser = {
        id: this.currentItem.id,
        title: updateUserData.title,
        firstName: updateUserData.firstName,
        lastName: updateUserData.lastName,
        email: this.currentItem.email,
        mobile: updateUserData.mobile,
        altEmail: updateUserData.altEmail,
        marketingPref: getMarketingPreference(updateUserData.marketingPref)
      }

      this.httpClient.put(this.url + updatedUser.id, updatedUser).subscribe(data => {
        // self.close();

        this.showBanner = true;

        this.bannerTitle = this.profileForm.value.firstName + ' updated';
        this.bannerSubTitle = this.profileForm.value.firstName + ' updated successfully';
        this.bannerStatus = true

        this.showBanner = true;
        setTimeout(() => {
          this.showBanner = false;
          this.matDialog.closeAll();
        }, 5000);

      });
    }
  }

  changeTitle(e: any) {
    console.log(e);
  }

  closeBtnClick() {
    this.matDialog.closeAll();
  }
}

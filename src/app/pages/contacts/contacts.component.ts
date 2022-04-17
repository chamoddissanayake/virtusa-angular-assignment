import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from "@angular/material/dialog";
import {DialogOverviewComponent} from "./dialog-overview/dialog-overview.component";
import {UserService} from "../../services/user.service";

export interface UserElement {
  id: number;
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  altEmail: string;
}



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  title = 'Contact';
  subTitle = 'Manage team member roles for BT Accounts and roles - swiftly and instantly';
  ELEMENT_DATA: any = [
    // {
    //   index: 1,
    //   title:'Mr.',
    //   firstName: 'Simon',
    //   lastName:'Archer',
    //   email: 'simonarcher@emailaddress.com',
    //   mobile: '01207678333',
    //   altEmail: 'ianbarrett@emailaddress.com'
    // },
    // {
    //   index: 2,
    //   title:'Mrs.',
    //   firstName: 'Ian',
    //   lastName:'Barrett',
    //   email: 'ianbarrett@emailaddress.com',
    //   mobile: '01207678333',
    //   altEmail: 'ianbarrett@ernadaddress.com'
    // },
    // {
    //   index: 3,
    //   title:'Miss',
    //   firstName: 'Louis',
    //   lastName:'Morrell',
    //   email: 'louis123@emailad3ress.com',
    //   mobile: '01207678333',
    //   altEmail: ''
    // },
    // {
    //   index: 4,
    //   title:'Mr.',
    //   firstName: 'William',
    //   lastName:'Sanns',
    //   email: 'roberlsrs@emailaddress.com',
    //   mobile: '01207678333',
    //   altEmail: 'ianbarrett@emailaddress.com'
    // },
    // {
    //   index: 5,
    //   title:'Mr.',
    //   firstName: 'Sam',
    //   lastName:'Morton',
    //   email: 'sammym@emailaddress.com',
    //   mobile: '01207678333',
    //   altEmail: 'ianbarrett@emailaddress.com'
    // },
    // {
    //   index: 6,
    //   title:'Mr.',
    //   firstName: 'Steven',
    //   lastName:'Morttle',
    //   email: 'sm123@emailaddress.com',
    //   mobile: '01207678333',
    //   altEmail: 'ianbarrett@emailaddress.com'
    // },
    // {
    //   index: 7,
    //   title:'Mr.',
    //   firstName: 'Cynthia',
    //   lastName:'Ratter',
    //   email: 'cynthratter17789@ernailaddress.com',
    //   mobile: '01207678333',
    //   altEmail: 'ianbarrett@emailaddress.com'
    // },
    // {
    //   index: 8,
    //   title:'Mr.',
    //   firstName: 'Steven',
    //   lastName:'Morttle',
    //   email: 'sm123@emailaddress.com',
    //   mobile: '01207678333',
    //   altEmail: ''
    // },
    // {
    //   index: 9,
    //   title:'Mr.',
    //   firstName: 'Cynthia',
    //   lastName:'Ratter',
    //   email: 'cynthratter17789@emailaddress.com',
    //   mobile: '01207678333',
    //   altEmail: ''
    // },
    // {
    //   index: 10,
    //   title:'Mr.',
    //   firstName: 'Steven',
    //   lastName:'Montle',
    //   email: 'sm123@emailaddress.com',
    //   mobile: '01207678333',
    //   altEmail: 'ianbarrett@emailaddress.com'
    // },
  ];

  showBannerDel = false;
  bannerStatusDel = false;
  bannerTitleDel = '';
  bannerSubTitleDel = '';

  displayedColumns: string[] = ['name', 'email', 'mobile', 'altEmail', 'actions'];
  dataSource = this.ELEMENT_DATA;

  constructor(private router: Router, public dialog: MatDialog, private userService: UserService) {
  }


  products = [];

  ngOnInit(): void {
    this.userService.sendGetRequest().subscribe((data) => {
      console.log(data);
      this.ELEMENT_DATA = data;
      this.setDataSource()
    })
  }
  // deleteUserRequest
  setDataSource(){
    this.dataSource  = this.ELEMENT_DATA
  }
  addBtnPressed() {
    this.router.navigate(['contacts/add']);

  }

  editButtonClicked(element: any) {
    var currentItem = element;
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '60%',
      // height: '90%',
      data: currentItem
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)

      this.userService.sendGetRequest().subscribe((data) => {
        console.log(data);
        this.ELEMENT_DATA = data;
        this.setDataSource()
      })

    });
  }

  deleteBtnClicked(element: any) {
    var currentItem = element;

      this.userService.deleteUserRequest(element.id)
        .subscribe(response => {
          this.userService.sendGetRequest().subscribe((data) => {
            this.ELEMENT_DATA = data;
            this.setDataSource()

            this.bannerTitleDel = 'User '  + 'deleted';
            this.bannerSubTitleDel = 'User ' + 'deleted successfully';
            this.bannerStatusDel = true

            this.showBannerDel = true;
            setTimeout(() => {
              this.showBannerDel = false;
            }, 5000);

          })

        });
  }

  editButtonClicked1(currentItem: UserElement) {
    this.editButtonClicked(currentItem)
    // alert("edit clicked"+  currentItem.id)
  }

  deleteBtnClicked1(currentItem: UserElement) {
    // alert("delete clicked"+ currentItem.id)
    this.deleteBtnClicked(currentItem)
  }
}

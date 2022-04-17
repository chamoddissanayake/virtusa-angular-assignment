import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  title = 'Profile';
  subTitle = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  title = 'Email';
  subTitle = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
  constructor() { }

  ngOnInit(): void {
  }

}

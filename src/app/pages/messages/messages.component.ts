import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  title = 'Messages';
  subTitle = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
  constructor() { }

  ngOnInit(): void {
  }

}

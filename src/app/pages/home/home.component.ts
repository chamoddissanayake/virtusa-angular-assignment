import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Home';
  subTitle = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
  constructor() { }

  ngOnInit(): void {
  }

}

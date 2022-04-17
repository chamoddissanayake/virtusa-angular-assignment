import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  title = 'Services';
  subTitle = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
  constructor() { }

  ngOnInit(): void {
  }

}

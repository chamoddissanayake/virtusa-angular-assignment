import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() title = '';
  @Input() subTitle = '';
  @Input() status = false;
  constructor() { }

  ngOnInit(): void {
  }

  getBackgroundColor() {
    if(this.status == true){
      return 'green'
    }else{
      return 'red'
    }
  }
}

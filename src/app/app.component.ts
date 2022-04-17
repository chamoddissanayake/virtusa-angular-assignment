import {Component, HostListener} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment';

  selected = 'home'
  isLarge=true;

  constructor(private router: Router) {
    const parsedUrl = new URL(window.location.href);
    let arr = parsedUrl.pathname.split('/');

    this.setSelected(arr[1]);
  }
  @HostListener('window:resize', ['$event'])

  onResize(event:any) {
    if(event.target.innerWidth>800){
      this.isLarge = true;
    }else{
      this.isLarge = false;
    }
  }

  clickHome() {
    this.selected = 'home';
  }

  clickDevices() {
    this.selected = 'devices';
  }

  clickOrders() {
    this.selected = 'orders';
  }

  clickServices() {
    this.selected = 'services';
  }

  clickReturns() {
    this.selected = 'returns';
  }

  clickContacts() {
    this.selected = 'contacts';
  }

  clickMessages() {
    this.selected = 'messages';
  }

  clickProfile() {
    this.selected = 'profile';
  }

  clickEmail() {
    this.selected = 'email';
  }

  randomColor(selectedColor: string) {
    if (selectedColor == this.selected) {
      return 'green'
    }
    return 'black'
  }

  randomColorLine(selectedColor: string) {
    if (selectedColor == this.selected) {
      return '#d5d5d5'
    }
    return 'black'
  }


  getHeight(type: string) {
    if (type == this.selected) {
      return '3'
    }
    return '0'
  }

  private setSelected(fromURL: any) {
    if (fromURL == 'home') {
      this.selected = 'home';
    } else if (fromURL == 'devices') {
      this.selected = 'devices';
    }else if (fromURL == 'orders') {
      this.selected = 'orders';
    }else if (fromURL == 'services') {
      this.selected = 'services';
    }else if (fromURL == 'returns') {
      this.selected = 'returns';
    }else if (fromURL == 'contacts') {
      this.selected = 'contacts';
    }else if (fromURL == 'messages') {
      this.selected = 'messages';
    }else if (fromURL == 'profile') {
      this.selected = 'profile';
    }else if (fromURL == 'email') {
      this.selected = 'email';
    }

  }
}

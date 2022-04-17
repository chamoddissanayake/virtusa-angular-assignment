import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from "@angular/cli/utilities/package-json";
import {UserElement} from "../contacts.component";

@Component({
  selector: 'app-mobile-card-view',
  templateUrl: './mobile-card-view.component.html',
  styleUrls: ['./mobile-card-view.component.scss']
})
export class MobileCardViewComponent implements OnInit {
  // @Input() user: UserElement ;
  // @Input() user: UserElement = {
  //   altEmail: '', email: '', firstName: '', id: 0, lastName: '', mobile: '', title: ''
  // };
  @Input() user: UserElement;

  @Output() editClickEE = new EventEmitter<UserElement>();
  @Output() deleteClickEE= new EventEmitter<UserElement>();

  constructor() {
    this.user = {
        altEmail: '', email: '', firstName: '', id: 0, lastName: '', mobile: '', title: ''
      };
  }

  ngOnInit(): void {
    // this.user = {
    //   altEmail: '', email: '', firstName: '', id: 0, lastName: '', mobile: '', title: ''
    // };
  }

  deleteClicked() {
    this.deleteClickEE.emit(this.user);
  }

  editClicked() {
    this.editClickEE.emit(this.user);
  }
}

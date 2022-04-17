import {NgModule} from '@angular/core';

import {ContactsRoutingModule} from './contacts-routing.module';
import {SharedModule} from "../../../shared/shared.module";
import {ContactsComponent} from "./contacts.component";
import {MatButtonModule} from "@angular/material/button";
import { AddContactComponent } from './add-contact/add-contact.component';
import {MatTableModule} from "@angular/material/table";
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import {MatDialogModule} from "@angular/material/dialog";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MobileCardViewComponent } from './mobile-card-view/mobile-card-view.component';

@NgModule({
  imports: [
    SharedModule,
    ContactsRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    ContactsComponent,
    AddContactComponent,
    DialogOverviewComponent,
    MobileCardViewComponent
  ]
})
export class ContactsModule { }

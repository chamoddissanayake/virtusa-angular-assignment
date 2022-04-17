import {NgModule} from '@angular/core';

import {EmailRoutingModule} from './email-routing.module';
import {SharedModule} from "../../../shared/shared.module";
import {EmailComponent} from "./email.component";


@NgModule({
  imports: [
    SharedModule,
    EmailRoutingModule
  ],
  declarations: [EmailComponent]
})
export class EmailModule { }

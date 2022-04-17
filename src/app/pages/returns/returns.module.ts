import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReturnsRoutingModule } from './returns-routing.module';
import {SharedModule} from "../../../shared/shared.module";
import {ReturnsComponent} from "./returns.component";


@NgModule({
  imports: [
    SharedModule,
    ReturnsRoutingModule
  ],
  declarations: [ReturnsComponent]
})
export class ReturnsModule { }

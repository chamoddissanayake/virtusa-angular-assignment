import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import {SharedModule} from "../../../shared/shared.module";
import {OrdersComponent} from "./orders.component";


@NgModule({
  imports: [
    SharedModule,
    OrdersRoutingModule
  ],
  declarations: [OrdersComponent]
})
export class OrdersModule { }

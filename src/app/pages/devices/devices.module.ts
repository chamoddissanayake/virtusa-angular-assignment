import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import {DevicesComponent} from "./devices.component";
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  imports: [
    SharedModule,
    DevicesRoutingModule
  ],
  declarations: [DevicesComponent]
})
export class DevicesModule { }

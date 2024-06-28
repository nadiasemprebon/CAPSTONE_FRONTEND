import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelpackagesRoutingModule } from './travelpackages-routing.module';
import { TravelpackagesComponent } from './travelpackages.component';


@NgModule({
  declarations: [
    TravelpackagesComponent
  ],
  imports: [
    CommonModule,
    TravelpackagesRoutingModule
  ]
})
export class TravelpackagesModule { }

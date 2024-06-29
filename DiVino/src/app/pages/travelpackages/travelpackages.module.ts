import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelpackagesRoutingModule } from './travelpackages-routing.module';
import { TravelpackagesComponent } from './travelpackages.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TravelpackagesComponent
  ],
  imports: [
    CommonModule,
    TravelpackagesRoutingModule,
    FormsModule
  ]
})
export class TravelpackagesModule { }

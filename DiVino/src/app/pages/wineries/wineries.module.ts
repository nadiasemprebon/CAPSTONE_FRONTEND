import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WineriesRoutingModule } from './wineries-routing.module';
import { WineriesComponent } from './wineries.component';


@NgModule({
  declarations: [
    WineriesComponent
  ],
  imports: [
    CommonModule,
    WineriesRoutingModule
  ]
})
export class WineriesModule { }

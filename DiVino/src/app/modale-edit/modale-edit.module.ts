import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModaleEditRoutingModule } from './modale-edit-routing.module';
import { ModaleEditComponent } from './modale-edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModaleEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModaleEditRoutingModule
  ]
})
export class ModaleEditModule { }

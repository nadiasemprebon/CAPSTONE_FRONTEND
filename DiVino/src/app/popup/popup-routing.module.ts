import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopUpComponent } from './popup.component';

const routes: Routes = [{ path: '', component: PopUpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopupRoutingModule { }

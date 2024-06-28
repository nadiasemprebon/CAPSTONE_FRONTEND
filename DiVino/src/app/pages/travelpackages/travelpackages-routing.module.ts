import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelpackagesComponent } from './travelpackages.component';

const routes: Routes = [{ path: 'travelpackages', component: TravelpackagesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelpackagesRoutingModule { }

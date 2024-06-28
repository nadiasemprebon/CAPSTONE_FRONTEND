import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WineriesComponent } from './wineries.component';

const routes: Routes = [{ path: 'wineries', component: WineriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WineriesRoutingModule { }

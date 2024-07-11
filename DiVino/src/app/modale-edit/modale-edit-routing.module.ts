import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModaleEditComponent } from './modale-edit.component';

const routes: Routes = [{ path: '', component: ModaleEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModaleEditRoutingModule { }

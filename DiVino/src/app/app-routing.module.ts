import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/*le svuoto tutte tranne auth perche rende il path piu corto*/
const routes: Routes = [{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: '', loadChildren: () => import('./pages/travelpackages/travelpackages.module').then(m => m.TravelpackagesModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '', loadChildren: () => import('./pages/wineries/wineries.module').then(m => m.WineriesModule) },
  { path: 'pages/popup', loadChildren: () => import('./popup/popup.module').then(m => m.PopupModule) },
  { path: 'pages/home/modaleEdit', loadChildren: () => import('./modale-edit/modale-edit.module').then(m => m.ModaleEditModule) }
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

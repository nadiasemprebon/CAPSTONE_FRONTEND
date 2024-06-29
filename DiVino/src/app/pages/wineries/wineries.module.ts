import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WineriesRoutingModule } from './wineries-routing.module';
import { WineriesComponent } from './wineries.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { AuthInterceptor } from '../../auth/auth.interceptor';


@NgModule({
  declarations: [
    WineriesComponent
  ],
  imports: [
    CommonModule,
    WineriesRoutingModule,
    FormsModule
  ],

  providers: [provideHttpClient(),{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  } ]
})
export class WineriesModule { }

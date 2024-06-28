import { Component } from '@angular/core';
import { ILogInData } from '../../models/ilog-in-data';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginData:ILogInData = {
    userName: 'john_doe',
    password: 'securePassword123'

  }

  constructor(
    private authSvc:AuthService,
    private router:Router
    ){}

    signIn(){

      this.authSvc.login(this.loginData)
      .subscribe(data => {
        this.router.navigate(['/'])
      })

    }

}

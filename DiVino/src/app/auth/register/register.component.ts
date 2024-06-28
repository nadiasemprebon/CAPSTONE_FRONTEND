import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { IUser } from '../../models/iuser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerData:Partial<IUser> = {
    userName: "john_doe",
    password: "securePassword123",
    firstName: "jhon",
    lastName: "doe",
    email: "john.doe@example.com",

  }

  constructor(
    private authSvc:AuthService,
    private router:Router
    ){}

  signUp(){
    this.authSvc.register(this.registerData)
    .subscribe(data => {

      this.router.navigate(['/auth/login'])

    })
  }


}

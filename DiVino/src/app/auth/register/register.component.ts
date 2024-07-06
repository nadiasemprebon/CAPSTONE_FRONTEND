import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { IUser } from '../../models/iuser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { PopupRegisterComponent } from '../popup-register/popup-register.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerData: Partial<IUser> = {
    userName: "john_doe",
    password: "securePassword123",
    firstName: "john",
    lastName: "doe",
    email: "john.doe@example.com",
  };

  @ViewChild('registerForm') registerForm!: NgForm;

  constructor(
    private authSvc: AuthService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  signUp() {
    if (this.registerForm.valid) {
      this.authSvc.register(this.registerData)
        .subscribe(data => {
          const modalRef = this.modalService.open(PopupRegisterComponent);
          modalRef.componentInstance.message = 'Registrazione completata con successo!';
          modalRef.result.then(() => {
            this.router.navigate(['/auth/login']);
          }).catch((err) => {
            console.error('Error closing modal: ', err);
          });
        });
    }
  }
}

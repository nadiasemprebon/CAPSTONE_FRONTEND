import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup-register',
  templateUrl: './popup-register.component.html',
  styleUrls: ['./popup-register.component.scss']
})
export class PopupRegisterComponent {
  @Input() message: string = '';

  constructor(public activeModal: NgbActiveModal) { }
}

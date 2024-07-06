import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IWinery } from '../interfaces/iwinery';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopUpComponent {
  @Input() wineryData: Partial<IWinery> = {};

  constructor(public activeModal: NgbActiveModal) { }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IWinery } from '../interfaces/iwinery';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopUpComponent {
  @Input() wineryData: Partial<IWinery> = {};
  @Output() close = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }
}

import { WineryServiceService } from './winery-service.service';
import { Component, ViewChild } from '@angular/core';
import { IWinery } from '../../interfaces/iwinery';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-wineries',
  templateUrl: './wineries.component.html',
  styleUrls: ['./wineries.component.scss']
})
export class WineriesComponent {
  newWinery: Partial<IWinery> = {};
  showPopup: boolean = false;
  popupData: Partial<IWinery> = {};  // Inizializzato come oggetto vuoto

  @ViewChild('wineryForm') wineryForm: NgForm | null = null;

  constructor(private WinSvc: WineryServiceService) {}

  aggiungiWinery() {
    this.WinSvc.create(this.newWinery).subscribe(() => {
      this.popupData = { ...this.newWinery }; // Copia dei dati del form
      this.showPopup = true;
      this.newWinery = {};
      this.wineryForm?.resetForm();
    });
  }

  closePopup() {
    this.showPopup = false;
    this.popupData = {};  // Reset a un oggetto vuoto anziché null
  }
}

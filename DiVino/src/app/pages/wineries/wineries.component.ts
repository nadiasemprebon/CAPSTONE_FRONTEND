import { WineryServiceService } from './winery-service.service';
import { Component, ViewChild } from '@angular/core';
import { IWinery } from '../../interfaces/iwinery';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopUpComponent } from '../../popup/popup.component';


@Component({
  selector: 'app-wineries',
  templateUrl: './wineries.component.html',
  styleUrls: ['./wineries.component.scss']
})
export class WineriesComponent {
  newWinery: Partial<IWinery> = {};

  @ViewChild('wineryForm') wineryForm!: NgForm;

  constructor(private WinSvc: WineryServiceService, private modalService: NgbModal) {}

  aggiungiWinery() {
    if (this.wineryForm.valid) {
      this.WinSvc.create(this.newWinery).subscribe(() => {
        const modalRef = this.modalService.open(PopUpComponent);
        modalRef.componentInstance.wineryData = { ...this.newWinery };
        modalRef.result.then(() => {
          this.newWinery = {};
          this.wineryForm.resetForm();
        }).catch((err) => {
          console.error('Error closing modal: ', err);
        });
      });
    }
  }

  closePopup() {
    this.modalService.dismissAll();
  }
}

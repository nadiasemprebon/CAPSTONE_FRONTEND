import { Component, OnInit } from '@angular/core';
import { ITravelpackage } from '../../interfaces/itravelpackage';
import { TravelpackageServiceService } from './travelpackage-service.service';

@Component({
  selector: 'app-travelpackages',
  templateUrl: './travelpackages.component.html',
  styleUrls: ['./travelpackages.component.scss']
})
export class TravelpackagesComponent {
  newTravelpackage: Partial<ITravelpackage> = {};
  selectedFile: File | null = null;
  travelpackages: ITravelpackage[] = [];

  constructor(private travSvc: TravelpackageServiceService) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  aggiungiTravelpackage() {
    const formData = new FormData();
    formData.append('wineryId', this.newTravelpackage.wineryId!.toString());
    formData.append('travelPackageName', this.newTravelpackage.travelPackageName!);

    if (this.selectedFile) {
      formData.append('imageUrl', this.selectedFile, this.selectedFile.name);
    }

    if (this.newTravelpackage.startDate) {
      formData.append('startDate', new Date(this.newTravelpackage.startDate).toISOString());
    }
    if (this.newTravelpackage.endDate) {
      formData.append('endDate', new Date(this.newTravelpackage.endDate).toISOString());
    }

    formData.append('price', this.newTravelpackage.price!.toString());

    this.travSvc.create(formData).subscribe(() => {
      // Aggiorna la lista dei pacchetti dopo l'aggiunta
      this.resetForm();
    });
  }

  resetForm() {
    this.newTravelpackage = {};
    this.selectedFile = null;
    // Se stai usando template-driven form, resetta il form qui
    // ad esempio con form.reset() se hai una reference al form
  }
}

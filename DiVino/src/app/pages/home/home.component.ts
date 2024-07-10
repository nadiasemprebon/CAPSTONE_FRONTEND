import { Component, OnInit } from '@angular/core';
import { TravelpackageServiceService } from '../travelpackages/travelpackage-service.service';
import { ITravelpackage } from '../../interfaces/itravelpackage';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  travelpackages: ITravelpackage[] = [];
  private subscriptions: Subscription = new Subscription();

  constructor(private travelpackageService: TravelpackageServiceService) {}

  ngOnInit() {
    this.travelpackageService.travelpackage$.subscribe(travelpackages => {
      this.travelpackages = travelpackages;
    });

    this.travelpackageService.getAll().subscribe();
  }

  deletePackage(id: number) {
    console.log('ID da cancellare:', id, 'Tipo:', typeof id); // Log ID e tipo

    if (!id) {
      console.error('ID non valido:', id);
      return;
    }

    const deleteTravelpackageSub = this.travelpackageService.delete(id).subscribe({
      next: () => {
        this.travelpackages = this.travelpackages.filter(product => product.id !== id);
        this.subscriptions.add(deleteTravelpackageSub);
        console.log('Pacchetto cancellato, nuovo array:', this.travelpackages); // Log nuovo array
      },
      error: (error) => {
        console.error('Errore nella cancellazione del prodotto', error);
      }
    });
  }
}

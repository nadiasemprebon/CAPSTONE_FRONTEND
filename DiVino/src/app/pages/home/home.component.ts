import { Component, OnInit } from '@angular/core';
import { TravelpackageServiceService } from '../travelpackages/travelpackage-service.service';
import { ITravelpackage } from '../../interfaces/itravelpackage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // Correzione: 'styleUrl' dovrebbe essere 'styleUrls'
})
export class HomeComponent implements OnInit {
  travelpackages: ITravelpackage[] = [];

  constructor(private travelpackageService: TravelpackageServiceService) {}

  ngOnInit() {
    this.travelpackageService.travelpackage$.subscribe(travelpackages => {
      this.travelpackages = travelpackages;
    });

    this.travelpackageService.getAll().subscribe();
  }

  deletePackage(packageId: number): void {
    this.travelpackageService.delete(packageId).subscribe(() => {
      this.travelpackages = this.travelpackages.filter(p => p.id !== packageId);
    });
  }
}

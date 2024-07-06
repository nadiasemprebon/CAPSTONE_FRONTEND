import { Component } from '@angular/core';
import { TravelpackageServiceService } from '../travelpackages/travelpackage-service.service';
import { ITravelpackage } from '../../interfaces/itravelpackage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  travelpackages: ITravelpackage[] = [];

  constructor(private travelpackageService: TravelpackageServiceService) {}

  ngOnInit() {
    this.travelpackageService.travelpackage$.subscribe(travelpackages => {
      this.travelpackages = travelpackages;
    });
  }

}

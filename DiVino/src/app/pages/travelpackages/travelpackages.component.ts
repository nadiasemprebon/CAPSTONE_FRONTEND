import { Component } from '@angular/core';
import { ITravelpackage } from '../../interfaces/itravelpackage';
import { TravelpackageServiceService } from './travelpackage-service.service';

@Component({
  selector: 'app-travelpackages',
  templateUrl: './travelpackages.component.html',
  styleUrl: './travelpackages.component.scss'
})
export class TravelpackagesComponent {
  newTravelpackage:Partial<ITravelpackage> = {}

  constructor(private travSvc:TravelpackageServiceService){}

  aggiungiTravelpackage(){
    this.travSvc.create(this.newTravelpackage).subscribe(()=>{
      this.newTravelpackage = {}
    })
  }

}

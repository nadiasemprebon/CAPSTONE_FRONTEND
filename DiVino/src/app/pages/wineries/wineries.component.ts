import { WineryServiceService } from './winery-service.service';
import { Component } from '@angular/core';
import { IWinery } from '../../interfaces/iwinery';

@Component({
  selector: 'app-wineries',
  templateUrl: './wineries.component.html',
  styleUrl: './wineries.component.scss'
})
export class WineriesComponent {

  newWinery:Partial<IWinery> ={}

  constructor(private WinSvc: WineryServiceService){}

  aggiungiWinery(){
    this.WinSvc.create(this.newWinery).subscribe(()=>{
      this.newWinery = {}
    })
  }

}

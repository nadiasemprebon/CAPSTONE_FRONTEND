import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TravelpackageServiceService } from '../travelpackages/travelpackage-service.service';
import { ITravelpackage } from '../../interfaces/itravelpackage';
import { Subscription } from 'rxjs';
import { ModaleEditComponent } from '../../modale-edit/modale-edit.component';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  travelpackages: ITravelpackage[] = [];
  private subscriptions: Subscription = new Subscription();
  isUserLoggedIn:boolean = false;
  constructor(private travelpackageService: TravelpackageServiceService, private modalService: NgbModal, private authSvc:AuthService) {}

  ngOnInit() {
    this.authSvc.isLoggedIn$.subscribe(data => {

      this.isUserLoggedIn = data;

    })
    this.travelpackageService.travelpackage$.subscribe(travelpackages => {
      this.travelpackages = travelpackages;

    })
  ;

    this.travelpackageService.getAll().subscribe();
  }

  openEditModal(id: number) {
    const travelPackage = this.travelpackages.find(pkg => pkg.id === id);
    if (travelPackage) {
      const modalRef = this.modalService.open(ModaleEditComponent);
      modalRef.componentInstance.travelPackage = travelPackage;

      modalRef.result.then((result) => {
        if (result) {
          const index = this.travelpackages.findIndex(pkg => pkg.id === result.id);
          if (index !== -1) {
            this.travelpackages[index] = result;
          }
        }
      }).catch((error) => {
        console.log('Modale chiuso senza modifiche', error);
      });
    }
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

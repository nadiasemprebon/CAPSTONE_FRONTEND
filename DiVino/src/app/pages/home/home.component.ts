import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TravelpackageServiceService } from '../travelpackages/travelpackage-service.service';
import { ITravelpackage } from '../../interfaces/itravelpackage';
import { Subscription } from 'rxjs';
import { ModaleEditComponent } from '../../modale-edit/modale-edit.component';
import { AuthService } from '../../auth/auth.service';
import { ITravelResponse } from '../../interfaces/itravel-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  travelpackages: ITravelResponse[] = [];
  private subscriptions: Subscription = new Subscription();
  isUserLoggedIn: boolean = false;

  constructor(
    private travelpackageService: TravelpackageServiceService,
    private modalService: NgbModal,
    private authSvc: AuthService
  ) {}

  ngOnInit() {
    // Sottoscrizione per verificare se l'utente è loggato
    this.subscriptions.add(
      this.authSvc.isLoggedIn$.subscribe(data => {
        this.isUserLoggedIn = data;
      })
    );

    // Sottoscrizione per ottenere i pacchetti di viaggio
    this.subscriptions.add(
      this.travelpackageService.travelpackageResp$.subscribe(travelpackages => {
        this.travelpackages = travelpackages;
      })
    );

    // Inizializzazione dei pacchetti di viaggio
    this.travelpackageService.getAll().subscribe();
  }

  ngOnDestroy() {
    // Annullare tutte le sottoscrizioni per evitare memory leaks
    this.subscriptions.unsubscribe();
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
        console.log('Pacchetto cancellato, nuovo array:', this.travelpackages); // Log nuovo array
      },
      error: (error) => {
        console.error('Errore nella cancellazione del prodotto', error);
      }
    });

    this.subscriptions.add(deleteTravelpackageSub);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITravelpackage } from '../../interfaces/itravelpackage';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TravelpackageServiceService {

  travelpackage:ITravelpackage[]=[]

  travelpackageSubject = new BehaviorSubject<ITravelpackage[]>([])
  travelpackage$ = this.travelpackageSubject.asObservable()

  constructor(  private http:HttpClient,
    private authSvc:AuthService) {

      this.getAll().subscribe()
     }

     apiUrl:string = environment.travelpackageUrl

     getAll():Observable<ITravelpackage[]>{
      return this.http.get<ITravelpackage[]>(this.apiUrl)
      .pipe(tap(trav => {
        this.travelpackageSubject.next(trav)
        this.travelpackage = trav
      }))
    }

    getById(id:number):ITravelpackage|null{


      return this.travelpackage.find(u => u.id == id) || null
    }

    update(travel:ITravelpackage){
      return this.http.put<ITravelpackage>(this.apiUrl+`/${travel.id}`,travel)
      .pipe(tap(trav => {//ricevo lo user aggiornato
        const index = this.travelpackage.findIndex(u => u.id == travel.id)
        this.travelpackage.splice(index, 1, trav)

        this.travelpackageSubject.next(this.travelpackage)
      }))
    }

    create(travel:Partial<ITravelpackage>){
      const httpOptions = {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.authSvc.getAccessToken()}`
        })
        }


      return this.http.post<ITravelpackage>(this.apiUrl,travel)
      .pipe(tap(trav => {//ricevo lo user aggiornato

        this.travelpackage.push(trav)
        this.travelpackageSubject.next(this.travelpackage)
      }))
    }

    delete(id:number){
      return this.http.delete<ITravelpackage>(this.apiUrl+`/${id}`)
      .pipe(tap(() => {
        const index = this.travelpackage.findIndex(u => u.id == id)
        this.travelpackage.splice(index, 1)

        this.travelpackageSubject.next(this.travelpackage)
      }))
    }
}



import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITravelpackage } from '../../interfaces/itravelpackage';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { environment } from '../../../environments/environment.development';
import { ITravelResponse } from '../../interfaces/itravel-response';

@Injectable({
  providedIn: 'root'
})
export class TravelpackageServiceService {
  private travelpackage: ITravelpackage[] = [];
  private travelpackageResp: ITravelResponse[]=[];
  private travelpackageSubject = new BehaviorSubject<ITravelpackage[]>([]);
  private travelpackageRespSubject = new BehaviorSubject<ITravelResponse[]>([]);
  travelpackage$ = this.travelpackageSubject.asObservable();
  travelpackageResp$ = this.travelpackageRespSubject.asObservable();
  constructor(private http: HttpClient, private authSvc: AuthService) {
    this.getAll().subscribe();
  }

  apiUrl: string = environment.travelpackageUrl;

  getAll(): Observable<ITravelResponse[]> {
    return this.http.get<ITravelResponse[]>(this.apiUrl).pipe(
      tap(trav => {
        this.travelpackageRespSubject.next(trav);
        this.travelpackageResp = trav;
      })
    );
  }

  getById(id: number): ITravelpackage | null {
    return this.travelpackage.find(u => u.id === id) || null;
  }

  update(travel: ITravelResponse): Observable<ITravelResponse> {
    const formData = new FormData();
    formData.append('winery', travel.winery.toString());
    formData.append('travelPackageName', travel.travelPackageName);
    if (travel.imageUrl) {
      formData.append('imageUrl', travel.imageUrl);
    }
    formData.append('startDate', travel.startDate.toISOString());
    formData.append('endDate', travel.endDate.toISOString());
    formData.append('price', travel.price.toString());

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.authSvc.getAccessToken()}`
      })
    };

    return this.http.put<ITravelResponse>(`${this.apiUrl}/${travel.id}`, formData, httpOptions).pipe(
      tap(updatedTravel => {
        const index = this.travelpackageResp.findIndex(u => u.id === travel.id);
        this.travelpackageResp[index] = updatedTravel;
        this.travelpackageRespSubject.next(this.travelpackageResp);
      })
    );
  }

  create(formData: FormData): Observable<ITravelpackage> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.authSvc.getAccessToken()}`
      })
    };

    return this.http.post<ITravelpackage>(this.apiUrl, formData).pipe(
      tap(newTravel => {
        this.travelpackage.push(newTravel);
        this.travelpackageSubject.next(this.travelpackage);
      })
    );
  }

  delete(id: number): Observable<void> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.authSvc.getAccessToken()}`
      })
    };

//serve per controllare se prende il token
    console.log(this.authSvc.getAccessToken())
    console.log(`URL: ${this.apiUrl}/${id}`);
    console.log('Intestazioni:', httpOptions.headers);
    return this.http.delete<void>(`${this.apiUrl}/${id}`, httpOptions);
  }
}

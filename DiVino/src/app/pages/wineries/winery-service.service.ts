import { Injectable } from '@angular/core';
import { IWinery } from '../../interfaces/iwinery';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { environment } from '../../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class WineryServiceService {

  win:IWinery[] = []

  winerySubject = new BehaviorSubject<IWinery[]>([])//entrata

  win$ = this.winerySubject.asObservable()//uscita

  constructor(  private http:HttpClient,
    private authSvc:AuthService) {

      this.getAll().subscribe()
     }

     apiUrl:string = environment.wineryUrl

     getAll():Observable<IWinery[]>{
      return this.http.get<IWinery[]>(this.apiUrl)
      .pipe(tap(win => {
        this.winerySubject.next(win)
        this.win = win
      }))
    }

    getById(id:number):IWinery|null{


      return this.win.find(u => u.id == id) || null
    }

    update(user:IWinery){
      return this.http.put<IWinery>(this.apiUrl+`/${user.id}`,user)
      .pipe(tap(responseUser => {//ricevo lo user aggiornato
        const index = this.win.findIndex(u => u.id == user.id)
        this.win.splice(index, 1, responseUser)

        this.winerySubject.next(this.win)
      }))
    }

    create(win:Partial<IWinery>){
      const httpOptions = {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.authSvc.getAccessToken()}`
        })
        }
      return this.http.post<IWinery>(this.apiUrl,win)
    }

    delete(id:number){
      return this.http.delete<IWinery>(this.apiUrl+`/${id}`)
      .pipe(tap(() => {
        const index = this.win.findIndex(u => u.id == id)
        this.win.splice(index, 1)

        this.winerySubject.next(this.win)
      }))
    }
}

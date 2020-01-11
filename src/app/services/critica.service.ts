import { Injectable } from '@angular/core';
import { Critica } from '../models/critica';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from '../shared/consts';
import { Observable, of } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CriticaService {

  constructor(private http: HttpClient) { }

  getCriticas(): Observable<Critica[]> {
    return this.http.get<Critica[]>(baseUrl + 'criticas', httpOptions).pipe();
  }

  setProducto(critica): Observable<Critica> {
    return this.http.post<Critica>(baseUrl + 'criticas/'+ critica, httpOptions)
    .pipe();
    }

  
}

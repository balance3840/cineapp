import { Injectable } from '@angular/core';
import {Entrada} from '../models/entrada';
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

export class EntradaService {

  constructor(private http: HttpClient) { }

  getEntradas(id): Observable<Entrada[]> {
    return this.http.get<Entrada[]>(baseUrl + '/entradas/usuario/'+ id, httpOptions).pipe();
  }

  setEntradas(entrada): Observable<Entrada> {
    return this.http.post<Entrada>(baseUrl + 'entradas/', entrada, httpOptions)
    .pipe();
  }
}

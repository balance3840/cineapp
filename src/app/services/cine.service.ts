import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Cine } from '../models/cine';
import { baseUrl } from '../shared/consts';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CineService {

  constructor(private http: HttpClient) {}

  getCines(): Observable<Cine[]> {
    return this.http.get<Cine[]>(baseUrl + 'cines', httpOptions).pipe();
  }

  getCine(id: number): Observable<Cine> {
    return this.http.get<Cine>(`${baseUrl}cines/${id}`, httpOptions).pipe();
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Pelicula } from '../models/pelicula';
import { baseUrl } from '../shared/consts';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private http: HttpClient) {}

  getPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(baseUrl + 'peliculas', httpOptions).pipe();
  }

  getPeliculasID(id: number): Observable<Pelicula> {
    return this.http.get<Pelicula>(baseUrl + 'peliculas/'+ id , httpOptions).pipe();
  }

  setPeliculas(pelicula): Observable<Pelicula> {
    return this.http.post<Pelicula>(baseUrl + 'peliculas/', pelicula, httpOptions)
    .pipe();
  }

  cambiarEstadoPelicula(id,pelicula): Observable<Pelicula> {
    return this.http.put<Pelicula>(baseUrl + 'peliculas/cambiarEstadoPelicula/' + id, pelicula, httpOptions)
    .pipe();
  }

  putPorragarEstreno(id,pelicula): Observable<Pelicula> {
    return this.http.put<Pelicula>(baseUrl + 'peliculas/prorrogarEstreno/' + id, pelicula, httpOptions)
    .pipe();
  }

  programarEstreno(id,pelicula): Observable<Pelicula> {
    return this.http.put<Pelicula>(baseUrl + 'peliculas/premiere/' + id, pelicula, httpOptions)
    .pipe();
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../shared/consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  login(usuario: any): Observable<any> {
    return this.http.post<any>(baseUrl + 'usuarios/login', usuario).pipe();
  }

  isAuthenticated() {
    if(localStorage.getItem("usuario")) {
      return true;
    }
    return false;
  }

}

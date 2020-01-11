import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../shared/consts';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private subject = new Subject<any>();

  constructor(private http: HttpClient) {}

  login(usuario: any): Observable<any> {
    return this.http.post<any>(baseUrl + 'usuarios/login', usuario).pipe();
  }

  isAuthenticatedObservable(): Observable<any> {
    this.subject.next({ "auth": false });
    if(localStorage.getItem("usuario")){
      this.subject.next({ "auth": true });
    }
    return this.subject.asObservable();
  }

  isAuthenticated() {
    if(localStorage.getItem("usuario")) {
      return true;
    }
    return false;
  }

}

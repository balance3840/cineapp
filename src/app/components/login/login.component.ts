import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  usuario = {nombre: '', clave: ''};

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    if(this.usuarioService.isAuthenticated()) {
      this.router.navigate(['dashboard']);    
    }
  }

  onSubmit() {
    this.usuarioService.login(this.usuario).subscribe(response => {
      if(response.authenticated) {
        localStorage.setItem("usuario", JSON.stringify(response));
        this.usuarioService.isAuthenticatedObservable();
        this.router.navigate(['dashboard']);
      };
    });
  }

}

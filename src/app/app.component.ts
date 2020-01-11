import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'cineapp';
  isAuthenticated:Boolean = false;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService.isAuthenticatedObservable().subscribe(data => {
      this.isAuthenticated = data.auth;
    });
  }

}

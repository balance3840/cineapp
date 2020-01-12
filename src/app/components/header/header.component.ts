import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent implements OnInit {

  idUsuario: number;
  @Input() isAuthenticated: Boolean;

  constructor(private titleService:Title, private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.titleService.setTitle("Cine Valencia - Inicio");
    this.usuarioService.isAuthenticatedObservable();
    var values =JSON.parse(localStorage.getItem('usuario'));
    this.idUsuario = values.id;
  }

  ngOnChanges() {}

}

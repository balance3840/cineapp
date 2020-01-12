import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  peliculas: Pelicula[];

  constructor(private usuarioService: UsuarioService, private peliculaService: PeliculaService, private router: Router) { }

  ngOnInit() {
    if(!this.usuarioService.isAuthenticated()) {
      this.router.navigate(['login']);
    }
    this.getPeliculas();
  }

  getPeliculas() {
    this.peliculaService.getPeliculas().subscribe(peliculas => this.peliculas = peliculas);
  }

}

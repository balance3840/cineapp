import { Component, OnInit, TemplateRef } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pelicula } from 'src/app/models/pelicula';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeliculaFormDialogComponent } from '../pelicula-form-dialog/pelicula-form-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  peliculas: Pelicula[];

  constructor(private usuarioService: UsuarioService, private peliculaService: PeliculaService, 
    private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
    if(!this.usuarioService.isAuthenticated()) {
      this.router.navigate(['login']);
    }
    this.getPeliculas();
  }

  getPeliculas() {
    this.peliculaService.getPeliculas().subscribe(peliculas => this.peliculas = peliculas);
  }

  openModal() {
    this.modalService.open(PeliculaFormDialogComponent);
  }

}

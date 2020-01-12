import { Component, OnInit, TemplateRef } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pelicula } from 'src/app/models/pelicula';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeliculaFormDialogComponent } from '../pelicula-form-dialog/pelicula-form-dialog.component';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  peliculas: Pelicula[];
  pelicula: Pelicula;
  model: NgbDateStruct;
  date: {year: number, month: number};
  accionProgramar: string = "programar";
  accionProrrogar: string = "prorrogar";

  

  constructor(private usuarioService: UsuarioService, private peliculaService: PeliculaService, 
    private router: Router, private modalService: NgbModal,
    private calendar: NgbCalendar) { }

  ngOnInit() {
    if(!this.usuarioService.isAuthenticated()) {
      this.router.navigate(['login']);
    }
    this.getPeliculas();
  }

  getPeliculas() {
    this.peliculaService.getPeliculas().subscribe(peliculas => this.peliculas = peliculas);
  }

  openModal(pelicula : Pelicula, accion : string) {
   const modalRef = this.modalService.open(PeliculaFormDialogComponent);
   modalRef.componentInstance.pelicula = pelicula;
   modalRef.componentInstance.accion = accion;
  }

  setDarAltaPelicula(id) {
    this.pelicula = new Pelicula();
    this.pelicula.activa = true;

    this.peliculaService.cambiarEstadoPelicula(id,this.pelicula).subscribe(pelicula => {
      this.pelicula = pelicula;
      window.location.reload();
    });
   
  }

  setDarBajaPelicula(id) {
    this.pelicula = new Pelicula();
    this.pelicula.activa = false;

    this.peliculaService.cambiarEstadoPelicula(id,this.pelicula).subscribe(pelicula => {
      this.pelicula = pelicula;
      window.location.reload();
    });

  }

  selectToday() {
    this.model = this.calendar.getToday();
  }


}

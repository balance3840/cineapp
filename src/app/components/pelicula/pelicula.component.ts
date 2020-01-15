import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pelicula } from 'src/app/models/pelicula';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbDateStruct, NgbModal, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { CarritoFormDialogComponent } from '../carrito-form-dialog/carrito-form-dialog.component';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.sass']
})
export class PeliculaComponent implements OnInit {

  vPeliculas: Pelicula[] = [];
  activeRoute: String;
  constructor(private peliculaService: PeliculaService, private modalService: NgbModal,  private router: Router) {
    this.activeRoute = this.router.url;
  }

  ngOnInit() {
    this.peliculaService.getPeliculas().subscribe(peliculas => {
      if (this.activeRoute === '/pelicula') {
        this.vPeliculas = peliculas;
      }
      else {
        if (peliculas.length > 3) {
          for (let index = 0; index < 3; index++) {
            this.vPeliculas.push(peliculas[index]);
          }
        }
        else {
          this.vPeliculas = peliculas;
        }
      };
    });

  }

  openModal(pelicula: Pelicula) {
    const modalRef = this.modalService.open(CarritoFormDialogComponent);
    modalRef.componentInstance.pelicula = pelicula;
   }
}

import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.sass']
})
export class PeliculaComponent implements OnInit {

  vPeliculas : Pelicula[];
  constructor(private peliculaService:PeliculaService) { }

  ngOnInit() {
    this.peliculaService.getPeliculas().subscribe(peliculas => this.vPeliculas = peliculas);

    
  }

   ver() {
    console.log(this.vPeliculas);
  }

}

import { Component, OnInit } from '@angular/core';
import { CriticaService } from 'src/app/services/critica.service';
import { Critica } from 'src/app/models/critica';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.sass']
})
export class DetallePeliculaComponent implements OnInit {

  criticas: Critica[];
  peliculasIds: number[];
  peliculas : Pelicula;

  constructor(private criticaService: CriticaService,private peliculaService:PeliculaService) { }

  ngOnInit() {
    this.criticaService.getCriticas().subscribe(criticas => this.criticas = criticas );
    // this.peliculaService.getPeliculasID(1).subscribe(peliculas => this.peliculas = peliculas);
  }

}

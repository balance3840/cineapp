import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Pelicula } from "../../models/pelicula";
@Component({
  selector: 'app-pelicula-registro',
  templateUrl: './pelicula-registro.component.html',
  styleUrls: ['./pelicula-registro.component.sass']
})
export class PeliculaRegistroComponent implements OnInit {

  peliculaForm: FormGroup;
  pelicula : Pelicula;
  constructor() { }

  ngOnInit() {
  }
 

}

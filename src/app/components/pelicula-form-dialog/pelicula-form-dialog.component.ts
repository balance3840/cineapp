import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-pelicula-form-dialog',
  templateUrl: './pelicula-form-dialog.component.html',
  styleUrls: ['./pelicula-form-dialog.component.sass']
})
export class PeliculaFormDialogComponent implements OnInit {

  @Input() pelicula: Pelicula;
  constructor() { }

  ngOnInit() {
    console.log(this.pelicula);
  }

}

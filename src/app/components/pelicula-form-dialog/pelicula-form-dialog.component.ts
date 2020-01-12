import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from "../../services/pelicula.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal,NgbActiveModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-pelicula-form-dialog',
  templateUrl: './pelicula-form-dialog.component.html',
  styleUrls: ['./pelicula-form-dialog.component.sass']
})
export class PeliculaFormDialogComponent implements OnInit {

  erroresForm = {

    'fechaInicio': '',

    'fechaFin': ''

  };


  mensajesError = {

    'fechaInicio': {
      'required': 'La fecha de Inicio es obligatorio.'
    },

    'fechaFin': {

      'required': 'La fecha Fin son obligatorios.'
    }
  };

  @Input() pelicula: Pelicula;
  @Input() accion:string;

  peliculaForm: FormGroup;
  peliculaObj: Pelicula;
  nuevaPelicula : Pelicula;
  fechaInicio: NgbDate;
  fechaFin: NgbDate;  

  constructor(private fb: FormBuilder, private peliculaService: PeliculaService,public modal: NgbActiveModal) {this.crearFormulario(); }

  ngOnInit() {
    let fechaInicioParts = this.pelicula.fechaInicio.split("T");
    fechaInicioParts = fechaInicioParts[0].split("-");

    let fechaFinalParts = this.pelicula.fechaFin.split("T");
    fechaFinalParts = fechaFinalParts[0].split("-");

    this.fechaInicio = new NgbDate(Number(fechaInicioParts[0]) * 1, Number(fechaInicioParts[1]) * 1, Number(fechaInicioParts[2]) * 1);
    this.fechaFin = new NgbDate(Number(fechaFinalParts[0]) * 1, Number(fechaFinalParts[1]) * 1, Number(fechaFinalParts[2]) * 1); 

    const fecha: Date = new Date(this.fechaInicio.year, this.fechaInicio.month, this.fechaInicio.day);

  }

  crearFormulario() {
    this.peliculaForm = this.fb.group({
      fechaInicio: [Date, [Validators.required]],
      fechaFin: [Date, [Validators.required]],
    });

    this.peliculaForm.valueChanges.subscribe(datos => this.onCambioValor(datos));
    this.onCambioValor();


  }


  onCambioValor(data?: any) {
    if (!this.peliculaForm) { return; }
    const form = this.peliculaForm;
    for (const field in this.erroresForm) {
      // Se borrarán los mensajes de error previos
      this.erroresForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.mensajesError[field];
        for (const key in control.errors) {
          this.erroresForm[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit(){
    // this.modal.close('Save click')
    console.log(this.peliculaForm);
    if(this.accion === "prorrogar"){
        console.log('prorrogar');
    }
    else {
      console.log('programar');
    }
  }

  parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    }
    return null;
}


}

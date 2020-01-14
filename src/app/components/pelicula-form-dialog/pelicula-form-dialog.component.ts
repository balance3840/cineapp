import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from "../../services/pelicula.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal,NgbActiveModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { stringify } from 'querystring';
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

  constructor(private fb: FormBuilder, private peliculaService: PeliculaService, public modal: NgbActiveModal) {this.crearFormulario(); }

  ngOnInit() {
    if(this.pelicula.fechaInicio && this.pelicula.fechaFin) {
      let fechaInicioParts = this.pelicula.fechaInicio.split("T");
      fechaInicioParts = fechaInicioParts[0].split("-");
  
      let fechaFinalParts = this.pelicula.fechaFin.split("T");
      fechaFinalParts = fechaFinalParts[0].split("-");
  
      this.fechaInicio = new NgbDate(Number(fechaInicioParts[0]) * 1, Number(fechaInicioParts[1]) * 1, Number(fechaInicioParts[2]) * 1);
      this.fechaFin = new NgbDate(Number(fechaFinalParts[0]) * 1, Number(fechaFinalParts[1]) * 1, Number(fechaFinalParts[2]) * 1); 
    }
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

  prorrogarEstreno(){
    const fechaInicio: Date = new Date(this.fechaInicio.year, this.fechaInicio.month - 1, this.fechaInicio.day);
    const fechaFin : Date = new Date(this.fechaFin.year, this.fechaFin.month - 1, this.fechaFin.day);

    const fecha_Fin : string = this.formatDate(fechaFin);
    const fecha_Inicio : string = this.formatDate(fechaInicio);
    this.nuevaPelicula = new Pelicula();
    this.nuevaPelicula.fechaInicio = fecha_Inicio;
    this.nuevaPelicula.fechaFin = fecha_Fin;
    this.peliculaService.putPorragarEstreno(this.pelicula.id,this.nuevaPelicula)
      .subscribe(pelicula =>{this.pelicula = pelicula;
        this.modal.close('Save click'); 
      } ); 
  }

  programarEstreno(){
    const fechaInicio: Date = new Date(this.fechaInicio.year, this.fechaInicio.month - 1, this.fechaInicio.day);
    const fechaFin : Date = new Date(this.fechaFin.year, this.fechaFin.month - 1, this.fechaFin.day);

    const fecha_Fin : string = this.formatDate(fechaFin);
    const fecha_Inicio : string = this.formatDate(fechaInicio);
    this.nuevaPelicula = new Pelicula();
    this.nuevaPelicula.fechaInicio = fecha_Inicio;
    this.nuevaPelicula.fechaFin = fecha_Fin;
    this.peliculaService.programarEstreno(this.pelicula.id,this.nuevaPelicula)
      .subscribe(pelicula =>{this.pelicula = pelicula;
        this.modal.close('Save click'); 
      } ); 
  }

   formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

  onSubmit(){
    if(this.accion === "prorrogar"){
        this.prorrogarEstreno();
    }
    else {
      this.programarEstreno();
    }
  }


}

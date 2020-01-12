import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  erroresForm = {
    'criticaPelicula': ''
    };
  mensajesError = {
    'criticaPelicula': {
      'required': 'la critica es obligatorio.',
      'minlength': 'la critica debe tener una longitud mínima de 2 caracteres.',
      'maxlength': 'la critica no puede exceder de 150 caracteres.'
    }
  }

  criticaForm: FormGroup;
  criticas: Critica[];
  critica: Critica;
  nuevaCritica : Critica;
  peliculasIds: number[];
  peliculas : Pelicula;

  constructor(private fb: FormBuilder, private criticaService: CriticaService, private peliculaService:PeliculaService) {this.crearFormulario(); }

  crearFormulario(){
    this.criticaForm = this.fb.group({
      criticaPelicula: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
    });

    this.criticaForm.valueChanges.subscribe(datos => this.onCambioValor(datos));
    this.onCambioValor();
  }

  ngOnInit() {
    this.criticaService.getCriticas().subscribe(criticas => this.criticas = criticas );
    // this.peliculaService.getPeliculasID(1).subscribe(peliculas => this.peliculas = peliculas);
  }

  onCambioValor(data?: any){
    if (!this.criticaForm) { return; }
    const form = this.criticaForm;
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
    this.nuevaCritica = new Critica();
    this.nuevaCritica.criticaPelicula = this.criticaForm.value.criticaPelicula;

    this.criticaService.setCriticas(this.nuevaCritica).subscribe(critica=> this.critica = critica);

    this.criticaForm.reset({
      criticaPelicula: ''
    });
  }

}

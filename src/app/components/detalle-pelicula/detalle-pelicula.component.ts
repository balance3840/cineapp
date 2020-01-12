import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CriticaService } from 'src/app/services/critica.service';
import { Critica } from 'src/app/models/critica';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pelicula } from 'src/app/models/pelicula';
import { Params, ActivatedRoute } from '@angular/router';


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
  nuevaCritica: Critica;
  peliculas: Pelicula;
  idPelicula: number;

  constructor(
    private fb: FormBuilder,    
    private route: ActivatedRoute,
    private criticaService: CriticaService, 
    private peliculaService: PeliculaService) 
    { this.crearFormulario(); }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.criticaService.getCriticas().subscribe(criticas => {
      const filteredCriticas = criticas.filter(critica => critica.idPelicula === id);
      this.criticas = filteredCriticas;
    });
    this.peliculaService.getPeliculasID(id).subscribe(peliculas => this.peliculas = peliculas);
    this.idPelicula = id;
  }

  crearFormulario() {
    this.criticaForm = this.fb.group({
      criticaPelicula: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
    });

    this.criticaForm.valueChanges.subscribe(datos => this.onCambioValor(datos));
    this.onCambioValor();
  }

  onCambioValor(data?: any) {
    if (!this.criticaForm) { return; }
    const form = this.criticaForm;
    for (const field in this.erroresForm) {
      // Se borrarán los mensajes de error prev
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

  onSubmit() {
    this.nuevaCritica = new Critica();
    this.nuevaCritica.criticaPelicula = this.criticaForm.value.criticaPelicula;
    this.nuevaCritica.idPelicula = this.idPelicula;

    this.criticaService.setCriticas(this.nuevaCritica).subscribe(critica => this.critica = critica);

    this.criticaForm.reset({
      criticaPelicula: ''
    });
  }

}

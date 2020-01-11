import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pelicula } from "../../models/pelicula";
import { PeliculaService } from "../../services/pelicula.service";

@Component({
  selector: 'app-pelicula-registro',
  templateUrl: './pelicula-registro.component.html',
  styleUrls: ['./pelicula-registro.component.sass']
})
export class PeliculaRegistroComponent implements OnInit {

  erroresForm = {

    'nombre': '',

    'sipnosis': '',

    'trailer': '',

    'img': '',

    'genero': ''

  };


  mensajesError = {

    'nombre': {
      'required': 'El nombre es obligatorio.',

      'minlength': 'El nombre debe tener una longitud mínima de 2 caracteres.',

      'maxlength': 'El nombre no puede exceder de 25 caracteres.'
    },

    'sipnosis': {

      'required': 'Los sipnosis son obligatorios.',

      'minlength': 'Los sipnosis deben tener una longitud mínima de 15 caracteres.',

      'maxlength': 'Los sipnosis no pueden exceder de 500 caracteres.'
    },

    'trailer': {
      'required': 'El trailer es obligatorio.',

      'minlength': 'El trailer debe tener una longitud mínima de 2 caracteres.',

      'maxlength': 'El trailer no puede exceder de 100 caracteres.'
    },
    'img': {
      'required': 'La imagen es obligatorio.',

      'minlength': 'La imagen debe tener una longitud mínima de 2 caracteres.',

      'maxlength': 'La imagen no puede exceder de 100 caracteres.'
    },
    'genero': {
      'required': 'El genero es obligatorio.',

      'minlength': 'El genero debe tener una longitud mínima de 2 caracteres.',

      'maxlength': 'El genero no puede exceder de 25 caracteres.'
    }

  };


  peliculaForm: FormGroup;
  pelicula: Pelicula;
  nuevaPelicula : Pelicula;
  constructor(private fb: FormBuilder,
    private peliculaService: PeliculaService,
    @Inject('baseURL') private BaseURL) { this.crearFormulario(); }

  ngOnInit() {
  }

  crearFormulario() {
    this.peliculaForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      sipnosis: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(500)]],
      trailer: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      img: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      genero: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      activa: 1
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
  onSubmit() {
    console.log(this.peliculaForm);

    this.nuevaPelicula = new Pelicula();
    this.nuevaPelicula.nombre = this.peliculaForm.value.nombre;
    this.nuevaPelicula.sipnosis = this.peliculaForm.value.sipnosis;
    this.nuevaPelicula.trailer = this.peliculaForm.value.trailer;
    this.nuevaPelicula.img = this.peliculaForm.value.img;
    this.nuevaPelicula.genero = this.peliculaForm.value.genero;
    this.nuevaPelicula.activa = this.peliculaForm.value.activa;

    this.peliculaService.setPeliculas(this.nuevaPelicula)
      .subscribe(pelicula => this.pelicula = pelicula);

      this.peliculaForm.reset({
        nombre: '',
        sipnosis : '',
        trailer: '',
        img : '',
        genero : '',
        activa: 1
      });
    
  }


}

import { Component, OnInit, Input } from '@angular/core';
import {Entrada} from 'src/app/models/entrada';
import {EntradaService} from 'src/app/services/entrada.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal,NgbActiveModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-carrito-form-dialog',
  templateUrl: './carrito-form-dialog.component.html',
  styleUrls: ['./carrito-form-dialog.component.sass']
})
export class CarritoFormDialogComponent implements OnInit {

  erroresForm = {
    'hora': ''
  };
  mensajesError = {
    'hora': {
      'required': 'la entrada es obligatorio.',
      'minlength': 'la entrada debe tener una longitud mínima de 2 caracteres.',
      'maxlength': 'la entrada no puede exceder de 150 caracteres.'
    }
  }

  @Input() pelicula:Pelicula;
  entradaForm: FormGroup;
  entrada: Entrada;
  nuevaEntrada: Entrada;
  idUsuario: number;
  constructor(
    private fb: FormBuilder, 
    private entradaService: EntradaService, 
    public modal: NgbActiveModal
  ) {this.crearFormularioCarrito(); }

  ngOnInit() {
    var values =JSON.parse(localStorage.getItem('usuario'));
    this.idUsuario = values.id;
  }

  crearFormularioCarrito() {
    this.entradaForm = this.fb.group({
      hora: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
    });

    this.entradaForm.valueChanges.subscribe(datos => this.onCambioValor(datos));
    this.onCambioValor();
  }

  onCambioValor(data?: any) {
    if (!this.entradaForm) { return; }
    const form = this.entradaForm;
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
    this.nuevaEntrada = new Entrada();
    this.nuevaEntrada.caterleraId = 1;
    this.nuevaEntrada.hora = this.pelicula.fechaFin;
    this.nuevaEntrada.idPelicula = this.pelicula.id;
    this.nuevaEntrada.idUsuario = this.idUsuario;
    this.entradaService.setEntradas(this.nuevaEntrada).subscribe(entrada =>{this.entrada = entrada; this.modal.close('Save click');});
    this.entradaForm.reset({
      criticaPelicula: ''
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  erroresForm = {

    'nombre': '',

    'clave': ''

  };


  mensajesError = {

    'nombre': {
      'required': 'El nombre de Inicio es obligatorio.',

      'minlength': 'El nombre debe tener una longitud mínima de 2 caracteres.',

      'maxlength': 'El nombre no puede exceder de 25 caracteres.'
    },

    'clave': {

      'required': 'La Clave Fin son obligatorios.',

      'minlength': 'La Clave debe tener una longitud mínima de 5 caracteres.',

      'maxlength': 'La Clave no puede exceder de 25 caracteres.'
    }
  };

  usuario = {nombre: '', clave: ''};
  usuarioForm: FormGroup;
  constructor(private usuarioService: UsuarioService, private router: Router,
    private fb: FormBuilder) {this.crearFormulario(); }

  ngOnInit() {
    if(this.usuarioService.isAuthenticated()) {
      this.router.navigate(['dashboard']);    
    }
  }

  crearFormulario() {
    this.usuarioForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      clave: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]]
    });

    this.usuarioForm.valueChanges.subscribe(datos => this.onCambioValor(datos));
    this.onCambioValor();

  }

  onCambioValor(data?: any) {
    if (!this.usuarioForm) { return; }
    const form = this.usuarioForm;
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
    this.usuarioService.login(this.usuario).subscribe(response => {
      if(response.authenticated) {
        localStorage.setItem("usuario", JSON.stringify(response));
        this.usuarioService.isAuthenticatedObservable();
        this.router.navigate(['dashboard']);
      };
    });
  }

}

import { Component, OnInit, Input } from '@angular/core';
import {Entrada} from 'src/app/models/entrada';
import {EntradaService} from 'src/app/services/entrada.service';


@Component({
  selector: 'app-carrito-form-dialog',
  templateUrl: './carrito-form-dialog.component.html',
  styleUrls: ['./carrito-form-dialog.component.sass']
})
export class CarritoFormDialogComponent implements OnInit {

  entrada: Entrada;
  nuevaEntrada: Entrada;
  constructor(
    private entradaService: EntradaService, 
  ) { }

  ngOnInit() {
    console.log(this.entrada);
  }

  guardarEntrada(){
    this.nuevaEntrada = new Entrada();
    this.entradaService.setEntradas(this.nuevaEntrada).subscribe(entrada =>this.entrada = entrada);
  }



}

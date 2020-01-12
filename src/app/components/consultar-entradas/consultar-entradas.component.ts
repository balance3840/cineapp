import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntradaService } from 'src/app/services/entrada.service';
import { Entrada } from 'src/app/models/entrada';


@Component({
  selector: 'app-consultar-entradas',
  templateUrl: './consultar-entradas.component.html',
  styleUrls: ['./consultar-entradas.component.sass']
})
export class ConsultarEntradasComponent implements OnInit {

  idUsuario: number;
  entradas: Entrada[];

  constructor(
    private route: ActivatedRoute,
    private EntradaService: EntradaService
  ) { }

  ngOnInit() {
    var values = JSON.parse(localStorage.getItem('usuario'));
    this.idUsuario = values.id;
    let id = +this.route.snapshot.params['id'];
    this.EntradaService.getEntradas(id).subscribe(entradas => this.entradas = entradas)
  }

}

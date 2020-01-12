import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CineService } from 'src/app/services/cine.service';
import { Cine } from 'src/app/models/cine';

@Component({
  selector: 'app-detalle-cine',
  templateUrl: './detalle-cine.component.html',
  styleUrls: ['./detalle-cine.component.sass']
})
export class DetalleCineComponent implements OnInit {

  cine: Cine;

  constructor(private route: ActivatedRoute, private cineService: CineService) { }

  ngOnInit() {
    this.getCine();
  }

  getCine() {
    const id = this.route.snapshot.params['id'];
    this.cineService.getCine(id).subscribe(cine => this.cine = cine);
  }

}

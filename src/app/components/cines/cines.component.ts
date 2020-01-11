import { Component, OnInit } from '@angular/core';
import { CineService } from 'src/app/services/cine.service';
import { Cine } from 'src/app/models/cine';

@Component({
  selector: 'app-cines',
  templateUrl: './cines.component.html',
  styleUrls: ['./cines.component.sass']
})
export class CinesComponent implements OnInit {

  cines: Cine[];

  constructor(private cineService: CineService) { }

  ngOnInit() {
    this.cineService.getCines().subscribe(cines => this.cines = cines)
  }

}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Cine Valencia - Inicio");
  }

  ngOnInit() {
  }

}

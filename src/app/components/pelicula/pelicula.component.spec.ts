import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PeliculaComponent } from './pelicula.component';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { baseUrl } from 'src/app/shared/consts';
import { Pelicula } from 'src/app/models/pelicula';
import { Observable, of } from 'rxjs';
import { PELICULAS_PRUEBA } from 'src/app/models/peliculasTest';
import { DetallePeliculaComponent } from '../detalle-pelicula/detalle-pelicula.component';
import { LoaderComponent } from '../loader/loader.component';
import {CommonModule} from "@angular/common";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
describe('PeliculaComponent', () => {
  let component: PeliculaComponent;
  let fixture: ComponentFixture<PeliculaComponent>;

  beforeEach(async(() => {
    let peliculaServiceReplica = {
      getPeliculas: function (): Observable<Pelicula[]> {
        return of(PELICULAS_PRUEBA);
      }
    };

  TestBed.configureTestingModule({
    
    imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      NgbModule,
      RouterTestingModule.withRoutes([{ path: 'pelicula', component: PeliculaComponent }])],
    declarations: [PeliculaComponent,LoaderComponent,DetallePeliculaComponent],
    providers: [{ provide: PeliculaService, useValue: peliculaServiceReplica },
    { provide: 'baseURL', useValue: baseUrl },
    ]
  })
    .compileComponents();

  let productoservice = TestBed.get(PeliculaService);
}));


beforeEach(() => {
  fixture = TestBed.createComponent(PeliculaComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

it('should create', () => {
  expect(component).toBeTruthy();
});
/*
  it('peliculas creados deben ser 3', () => {
    expect(component.vPeliculas.length).toBe(3);
    expect(component.vPeliculas[0].nombre).toBe('Halloween Kill');
    expect(component.vPeliculas[1].activa).toBeFalsy();
  }); */
/*
  it('vPeliculas contiene un nombre de producto', () => {
    fixture.detectChanges();
    let de: DebugElement;
    let el: HTMLElement;
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    expect(el.textContent).toContain(PELICULAS_PRUEBA[0].nombre.toUpperCase());
  }); */
});


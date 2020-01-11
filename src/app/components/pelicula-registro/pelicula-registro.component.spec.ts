import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaRegistroComponent } from './pelicula-registro.component';

describe('PeliculaRegistroComponent', () => {
  let component: PeliculaRegistroComponent;
  let fixture: ComponentFixture<PeliculaRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

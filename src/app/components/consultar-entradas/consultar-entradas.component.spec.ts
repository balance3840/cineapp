import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEntradasComponent } from './consultar-entradas.component';

describe('ConsultarEntradasComponent', () => {
  let component: ConsultarEntradasComponent;
  let fixture: ComponentFixture<ConsultarEntradasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarEntradasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarEntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

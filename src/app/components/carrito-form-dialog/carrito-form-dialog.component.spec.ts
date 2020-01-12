import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoFormDialogComponent } from './carrito-form-dialog.component';

describe('CarritoFormDialogComponent', () => {
  let component: CarritoFormDialogComponent;
  let fixture: ComponentFixture<CarritoFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritoFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

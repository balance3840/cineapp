import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaFormDialogComponent } from './pelicula-form-dialog.component';

describe('PeliculaFormDialogComponent', () => {
  let component: PeliculaFormDialogComponent;
  let fixture: ComponentFixture<PeliculaFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

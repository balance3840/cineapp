import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCineComponent } from './detalle-cine.component';

describe('DetalleCineComponent', () => {
  let component: DetalleCineComponent;
  let fixture: ComponentFixture<DetalleCineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

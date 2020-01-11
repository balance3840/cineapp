import { TestBed } from '@angular/core/testing';

import { CriticaService } from './critica.service';

describe('CriticaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CriticaService = TestBed.get(CriticaService);
    expect(service).toBeTruthy();
  });
});

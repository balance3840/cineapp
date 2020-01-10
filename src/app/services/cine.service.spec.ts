import { TestBed } from '@angular/core/testing';

import { CineService } from './cine.service';

describe('CineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CineService = TestBed.get(CineService);
    expect(service).toBeTruthy();
  });
});

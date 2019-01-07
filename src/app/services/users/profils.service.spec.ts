import { TestBed } from '@angular/core/testing';

import { ProfilsService } from './profils.service';

describe('ProfilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfilsService = TestBed.get(ProfilsService);
    expect(service).toBeTruthy();
  });
});

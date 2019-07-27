import { TestBed } from '@angular/core/testing';

import { NewProjetService } from './new-projet.service';

describe('NewProjetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewProjetService = TestBed.get(NewProjetService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { EventProjectService } from './event-project.service';

describe('EventProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventProjectService = TestBed.get(EventProjectService);
    expect(service).toBeTruthy();
  });
});

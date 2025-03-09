import { TestBed } from '@angular/core/testing';

import { ExcursionSelectionService } from './excursion-selection.service';

describe('ExcursionSelectionService', () => {
  let service: ExcursionSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcursionSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SchoolSelectionService } from './school-selection.service';

describe('SchoolSelectionService', () => {
  let service: SchoolSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

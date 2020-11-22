import { TestBed } from '@angular/core/testing';

import { NameSearchService } from './name-search.service';

describe('NameSearchService', () => {
  let service: NameSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

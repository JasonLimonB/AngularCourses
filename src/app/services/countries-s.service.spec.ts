import { TestBed } from '@angular/core/testing';

import { CountriesSService } from './countries-s.service';

describe('CountriesSService', () => {
  let service: CountriesSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

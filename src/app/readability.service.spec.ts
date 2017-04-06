import { TestBed, inject } from '@angular/core/testing';

import { ReadabilityService } from './readability.service';

describe('ReadabilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadabilityService]
    });
  });

  it('should create the service', inject([ReadabilityService], (service: ReadabilityService) => {
    expect(service).toBeTruthy();
  }));
});

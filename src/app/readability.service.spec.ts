import { TestBed, inject } from '@angular/core/testing';
import { JsonpModule } from '@angular/http';

import { ReadabilityService } from './readability.service';

describe('ReadabilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadabilityService],
      imports: [JsonpModule]
    });
  });

  it('should create the service', inject([ReadabilityService], (service: ReadabilityService) => {
    expect(service).toBeTruthy();
  }));
});

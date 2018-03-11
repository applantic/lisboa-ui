import { TestBed, inject } from '@angular/core/testing';

import { DataMockService } from './data-mock.service';

describe('DataMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataMockService]
    });
  });

  it('should be created', inject([DataMockService], (service: DataMockService) => {
    expect(service).toBeTruthy();
  }));
});

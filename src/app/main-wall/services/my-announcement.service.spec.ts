import { TestBed, inject } from '@angular/core/testing';

import { MyAnnouncementService } from './my-announcement.service';

describe('MyAnnouncementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyAnnouncementService]
    });
  });

  it('should be created', inject([MyAnnouncementService], (service: MyAnnouncementService) => {
    expect(service).toBeTruthy();
  }));
});

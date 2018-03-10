import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementResponsePageComponent } from './announcement-response-page.component';

describe('AnnouncementResponsePageComponent', () => {
  let component: AnnouncementResponsePageComponent;
  let fixture: ComponentFixture<AnnouncementResponsePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncementResponsePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementResponsePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

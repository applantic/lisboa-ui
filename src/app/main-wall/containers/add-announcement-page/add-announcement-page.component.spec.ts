import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnnouncementPageComponent } from './add-announcement-page.component';

describe('AddAnnouncementPageComponent', () => {
  let component: AddAnnouncementPageComponent;
  let fixture: ComponentFixture<AddAnnouncementPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnnouncementPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnnouncementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

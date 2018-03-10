import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOfferPageComponent } from './add-offer-page.component';

describe('AddOfferPageComponent', () => {
  let component: AddOfferPageComponent;
  let fixture: ComponentFixture<AddOfferPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOfferPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOfferPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

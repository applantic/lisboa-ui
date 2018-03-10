import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferResponsePageComponent } from './offer-response-page.component';

describe('OfferResponsePageComponent', () => {
  let component: OfferResponsePageComponent;
  let fixture: ComponentFixture<OfferResponsePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferResponsePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferResponsePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

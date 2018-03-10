import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWallPageComponent } from './main-wall-page.component';

describe('MainWallPageComponent', () => {
  let component: MainWallPageComponent;
  let fixture: ComponentFixture<MainWallPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainWallPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWallPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlookLoginComponent } from './outlook-login.component';

describe('OutlookLoginComponent', () => {
  let component: OutlookLoginComponent;
  let fixture: ComponentFixture<OutlookLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutlookLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlookLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

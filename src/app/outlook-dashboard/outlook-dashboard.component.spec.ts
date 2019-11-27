import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlookDashboardComponent } from './outlook-dashboard.component';

describe('OutlookDashboardComponent', () => {
  let component: OutlookDashboardComponent;
  let fixture: ComponentFixture<OutlookDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutlookDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlookDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

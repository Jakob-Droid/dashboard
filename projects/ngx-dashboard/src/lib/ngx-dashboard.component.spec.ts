import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDashboardComponent } from './ngx-dashboard.component';

describe('NgxDashboardComponent', () => {
  let component: NgxDashboardComponent;
  let fixture: ComponentFixture<NgxDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxDashboardComponent]
    });
    fixture = TestBed.createComponent(NgxDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

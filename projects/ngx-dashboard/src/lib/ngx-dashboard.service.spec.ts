import { TestBed } from '@angular/core/testing';

import { NgxDashboardService } from './ngx-dashboard.service';

describe('NgxDashboardService', () => {
  let service: NgxDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

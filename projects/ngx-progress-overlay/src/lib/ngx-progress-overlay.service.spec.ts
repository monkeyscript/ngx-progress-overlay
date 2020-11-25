import { TestBed } from '@angular/core/testing';

import { NgxProgressOverlayService } from './ngx-progress-overlay.service';

describe('NgxProgressOverlayService', () => {
  let service: NgxProgressOverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxProgressOverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

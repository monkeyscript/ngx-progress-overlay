import { TestBed } from '@angular/core/testing';
import {
  NgxProgressOverlayService,
  DEFAULT_PROGRESS_COLOR,
  DEFAULT_VALUE_COLOR,
  DEFAULT_TEXT_COLOR,
  DEFAULT_DONUT_WIDTH,
  DEFAULT_OVERLAY_COLOR
} from './ngx-progress-overlay.service';

describe('NgxProgressOverlayService', () => {
  let service: NgxProgressOverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxProgressOverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit display and default values on show(text)', (done) => {
    let emissions = 0;
    service.display$.subscribe(display => {
      expect(display).toBeTrue();
      emissions++;
      if (emissions === 2) done();
    });
    service.color$.subscribe(color => {
      expect(color).toBe(DEFAULT_PROGRESS_COLOR);
      emissions++;
      if (emissions === 2) done();
    });

    service.show('Testing');
  });

  it('should emit custom values with config object', (done) => {
    service.text$.subscribe(t => {
      expect(t).toBe('Custom Object');
      done();
    });

    service.show({ text: 'Custom Object', color: '#123456' });
  });

  it('should emit false on hide()', (done) => {
    service.display$.subscribe(display => {
      expect(display).toBeFalse();
      done();
    });

    service.hide();
  });

  it('should emit progress value on setProgress()', (done) => {
    service.value$.subscribe(val => {
      expect(val).toBe(75);
      done();
    });

    service.setProgress(75);
  });
});

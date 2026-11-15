import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxProgressOverlayComponent } from './ngx-progress-overlay.component';
import { NgxProgressOverlayService } from './ngx-progress-overlay.service';

describe('NgxProgressOverlayComponent', () => {
  let component: NgxProgressOverlayComponent;
  let fixture: ComponentFixture<NgxProgressOverlayComponent>;
  let service: NgxProgressOverlayService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxProgressOverlayComponent],
      providers: [NgxProgressOverlayService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxProgressOverlayComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(NgxProgressOverlayService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show overlay and update text and value', () => {
    service.show('Loading data...');
    service.setProgress(45);
    fixture.detectChanges();

    expect(component.displayToggle).toBeTrue();
    expect(component.progressText).toBe('Loading data...');
    expect(component.progressValue).toBe(45);
    expect(component.progressFormatted).toBe('45 55');
  });

  it('should support configuration object in show()', () => {
    service.show({
      text: 'Saving...',
      color: '#00ff00',
      valueColor: '#111111',
      textColor: '#222222',
      donutWidth: 3,
      overlayColor: 'rgba(255,255,255,0.9)'
    });
    fixture.detectChanges();

    expect(component.displayToggle).toBeTrue();
    expect(component.progressText).toBe('Saving...');
    expect(component.progressColor).toBe('#00ff00');
    expect(component.valueColor).toBe('#111111');
    expect(component.textColor).toBe('#222222');
    expect(component.donutWidth).toBe(3);
    expect(component.overlayColor).toBe('rgba(255,255,255,0.9)');
  });

  it('should reset to default colors on subsequent show() with default params', () => {
    service.show({ color: '#ff0000', text: 'Custom' });
    fixture.detectChanges();
    expect(component.progressColor).toBe('#ff0000');

    service.show('Back to default');
    fixture.detectChanges();
    expect(component.progressColor).toBe('#c2185b');
  });

  it('should hide overlay when hide() is called', () => {
    service.show('Active');
    fixture.detectChanges();
    expect(component.displayToggle).toBeTrue();

    service.hide();
    fixture.detectChanges();
    expect(component.displayToggle).toBeFalse();
  });

  it('should clamp progressValue between 0 and 100', () => {
    service.setProgress(-10);
    expect(component.progressValue).toBe(0);

    service.setProgress(150);
    expect(component.progressValue).toBe(100);
  });
});

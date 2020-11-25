import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxProgressOverlayComponent } from './ngx-progress-overlay.component';

describe('NgxProgressOverlayComponent', () => {
  let component: NgxProgressOverlayComponent;
  let fixture: ComponentFixture<NgxProgressOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxProgressOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxProgressOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

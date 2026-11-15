import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import {
  NgxProgressOverlayService,
  DEFAULT_PROGRESS_COLOR,
  DEFAULT_VALUE_COLOR,
  DEFAULT_TEXT_COLOR,
  DEFAULT_DONUT_WIDTH,
  DEFAULT_OVERLAY_COLOR
} from './ngx-progress-overlay.service';

@Component({
  selector: 'ngx-progress-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngx-progress-overlay.component.html',
  styleUrls: ['./ngx-progress-overlay.component.css']
})
export class NgxProgressOverlayComponent implements OnInit, OnDestroy {

  progressColor: string = DEFAULT_PROGRESS_COLOR;
  progressValue: number = 0;
  progressText: string = '';
  displayToggle: boolean = false;
  progressFormatted: string = '0 100';

  valueColor: string = DEFAULT_VALUE_COLOR;
  textColor: string = DEFAULT_TEXT_COLOR;
  donutWidth: number = DEFAULT_DONUT_WIDTH;
  overlayColor: string = DEFAULT_OVERLAY_COLOR;

  private subscription = new Subscription();

  constructor(
    private dataService: NgxProgressOverlayService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // Subscribe for toggle display
    this.subscription.add(
      this.dataService.display$.subscribe(d => {
        this.displayToggle = d;
        this.cdr.markForCheck();
      })
    );

    // Subscribe for value changes
    this.subscription.add(
      this.dataService.value$.subscribe(v => {
        if (v < 0) {
          this.progressValue = 0;
        } else if (v > 100) {
          this.progressValue = 100;
        } else {
          this.progressValue = v;
        }
        const remainingValue = 100 - this.progressValue;
        this.progressFormatted = `${this.progressValue} ${remainingValue}`;
        this.cdr.markForCheck();
      })
    );

    // Subscribe for text changes
    this.subscription.add(
      this.dataService.text$.subscribe(t => {
        this.progressText = t;
        this.cdr.markForCheck();
      })
    );

    // Subscribe for color changes
    this.subscription.add(
      this.dataService.color$.subscribe(c => {
        this.progressColor = c || DEFAULT_PROGRESS_COLOR;
        this.cdr.markForCheck();
      })
    );

    // Subscribe for value color changes
    this.subscription.add(
      this.dataService.valueColor$.subscribe(c => {
        this.valueColor = c || DEFAULT_VALUE_COLOR;
        this.cdr.markForCheck();
      })
    );

    // Subscribe for text color changes
    this.subscription.add(
      this.dataService.textColor$.subscribe(c => {
        this.textColor = c || DEFAULT_TEXT_COLOR;
        this.cdr.markForCheck();
      })
    );

    // Subscribe for donut width changes
    this.subscription.add(
      this.dataService.donutWidth$.subscribe(w => {
        this.donutWidth = w && w > 0 ? w : DEFAULT_DONUT_WIDTH;
        this.cdr.markForCheck();
      })
    );

    // Subscribe for overlay color changes
    this.subscription.add(
      this.dataService.overlayColor$.subscribe(c => {
        this.overlayColor = c || DEFAULT_OVERLAY_COLOR;
        this.cdr.markForCheck();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

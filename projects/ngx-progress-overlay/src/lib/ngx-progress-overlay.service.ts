import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export const DEFAULT_PROGRESS_COLOR = '#c2185b';
export const DEFAULT_VALUE_COLOR = 'white';
export const DEFAULT_TEXT_COLOR = 'white';
export const DEFAULT_DONUT_WIDTH = 1;
export const DEFAULT_OVERLAY_COLOR = 'rgba(0,0,0,0.8)';

export interface ProgressOverlayConfig {
  text?: string;
  color?: string;
  valueColor?: string;
  textColor?: string;
  donutWidth?: number;
  overlayColor?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NgxProgressOverlayService {

  // Property subjects
  private displaySource = new Subject<boolean>();
  private valueSource = new Subject<number>();
  private textSource = new Subject<string>();
  private colorSource = new Subject<string>();
  private valueColorSource = new Subject<string>();
  private textColorSource = new Subject<string>();
  private donutWidthSource = new Subject<number>();
  private overlayColorSource = new Subject<string>();

  // Corresponding observables
  display$ = this.displaySource.asObservable();
  value$ = this.valueSource.asObservable();
  text$ = this.textSource.asObservable();
  color$ = this.colorSource.asObservable();
  valueColor$ = this.valueColorSource.asObservable();
  textColor$ = this.textColorSource.asObservable();
  donutWidth$ = this.donutWidthSource.asObservable();
  overlayColor$ = this.overlayColorSource.asObservable();

  constructor() { }

  // Show progress bar with configuration object
  show(config: ProgressOverlayConfig): void;
  // Show progress bar with positional parameters (backward compatibility)
  show(
    text?: string,
    color?: string,
    valueColor?: string,
    textColor?: string,
    donutWidth?: number,
    overlayColor?: string
  ): void;
  show(
    textOrConfig?: string | ProgressOverlayConfig,
    color?: string,
    valueColor?: string,
    textColor?: string,
    donutWidth?: number,
    overlayColor?: string
  ): void {
    let text = '';
    let resolvedColor: string | undefined;
    let resolvedValueColor: string | undefined;
    let resolvedTextColor: string | undefined;
    let resolvedDonutWidth: number | undefined;
    let resolvedOverlayColor: string | undefined;

    if (typeof textOrConfig === 'object' && textOrConfig !== null) {
      text = textOrConfig.text ?? '';
      resolvedColor = textOrConfig.color;
      resolvedValueColor = textOrConfig.valueColor;
      resolvedTextColor = textOrConfig.textColor;
      resolvedDonutWidth = textOrConfig.donutWidth;
      resolvedOverlayColor = textOrConfig.overlayColor;
    } else {
      text = textOrConfig ?? '';
      resolvedColor = color;
      resolvedValueColor = valueColor;
      resolvedTextColor = textColor;
      resolvedDonutWidth = donutWidth;
      resolvedOverlayColor = overlayColor;
    }

    this.valueSource.next(0);
    this.textSource.next(text);
    this.colorSource.next(resolvedColor ?? DEFAULT_PROGRESS_COLOR);
    this.valueColorSource.next(resolvedValueColor ?? DEFAULT_VALUE_COLOR);
    this.textColorSource.next(resolvedTextColor ?? DEFAULT_TEXT_COLOR);
    this.donutWidthSource.next(resolvedDonutWidth ?? DEFAULT_DONUT_WIDTH);
    this.overlayColorSource.next(resolvedOverlayColor ?? DEFAULT_OVERLAY_COLOR);
    this.displaySource.next(true);
  }

  // Hide progress bar
  hide(): void {
    this.displaySource.next(false);
  }

  // Set progress bar value
  setProgress(value: number): void {
    this.valueSource.next(value);
  }

}

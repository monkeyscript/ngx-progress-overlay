import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
 
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

  // Show progress bar
  show(text:string,color?:string,valueColor?:string,textColor?:string,donutWidth?:number,overlayColor?:string){
    this.valueSource.next(0);
    this.textSource.next(text)
    this.colorSource.next(color)
    this.valueColorSource.next(valueColor);
    this.textColorSource.next(textColor);
    this.donutWidthSource.next(donutWidth);
    this.overlayColorSource.next(overlayColor);
    this.displaySource.next(true);
  }

  // Hide progress bar
  hide(){
    this.displaySource.next(false);
  }

  // Set progress bar value
  setProgress(value:number){
    this.valueSource.next(value);
  }

}
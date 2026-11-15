import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxProgressOverlayComponent } from './ngx-progress-overlay.component';

@NgModule({
  imports: [
    CommonModule,
    NgxProgressOverlayComponent
  ],
  exports: [
    NgxProgressOverlayComponent
  ]
})
export class NgxProgressOverlayModule { }

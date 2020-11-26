import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxProgressOverlayModule } from '../../projects/ngx-progress-overlay/src/lib/ngx-progress-overlay.module'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxProgressOverlayModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

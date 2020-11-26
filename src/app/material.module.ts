import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
  ]
})

export class MaterialModule {}
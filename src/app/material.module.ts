import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatTooltipModule, MatCardModule],
  exports: [MatToolbarModule, MatButtonModule, MatTooltipModule, MatCardModule],
})
export class MaterialModule {}

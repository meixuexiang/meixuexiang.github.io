import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RegexpComponent } from './regexp/regexp.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,

    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,

    OverlayModule,
    MatButtonToggleModule,

    RouterModule.forChild([{ path: '**', pathMatch: 'full', component: RegexpComponent }])
  ],
  declarations: [RegexpComponent],
  providers: []
})
export class RegexpModule { }

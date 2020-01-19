import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UglifyComponent } from './uglify/uglify.component';
import { OptionsComponent } from './options/options.component';
import { ConfigService } from './config.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    OverlayModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTooltipModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: UglifyComponent }])
  ],
  declarations: [UglifyComponent, OptionsComponent],
  providers: [ConfigService]
})
export class UglifyModule { }

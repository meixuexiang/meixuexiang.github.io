import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { OverlayModule } from '@angular/cdk/overlay';
import { HostseditorComponent } from './hostseditor/hostseditor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSnackBarModule,
    OverlayModule,
    MatSlideToggleModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: HostseditorComponent }])
  ],
  declarations: [HostseditorComponent],
  providers: []
})
export class HostseditorModule { }

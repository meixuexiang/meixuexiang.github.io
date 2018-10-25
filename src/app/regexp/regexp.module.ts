import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  PanelModule,
  PanelMenuModule,
  InputTextModule,
  InputTextareaModule,
  SelectButtonModule,
  ButtonModule,
  GrowlModule,
  AutoCompleteModule,
  OverlayPanelModule,
  ChartModule,
  ColorPickerModule
} from 'primeng/primeng';
import { RegexpComponent } from './regexp/regexp.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,

    PanelModule,
    PanelMenuModule,
    InputTextModule,
    InputTextareaModule,
    SelectButtonModule,
    ButtonModule,
    GrowlModule,
    AutoCompleteModule,
    OverlayPanelModule,
    ChartModule,
    ColorPickerModule,

    RouterModule.forChild([{ path: '**', pathMatch: 'full', component: RegexpComponent }])
  ],
  declarations: [RegexpComponent],
  providers: []
})
export class RegexpModule { }

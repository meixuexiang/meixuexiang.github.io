import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import {ToastModule} from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';

import { RegexpComponent } from './regexp/regexp.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,

    PanelModule,
    InputTextModule,
    InputTextareaModule,
    SelectButtonModule,
    ButtonModule,
    ToastModule,
    OverlayPanelModule,

    RouterModule.forChild([{ path: '**', pathMatch: 'full', component: RegexpComponent }])
  ],
  declarations: [RegexpComponent],
  providers: []
})
export class RegexpModule { }

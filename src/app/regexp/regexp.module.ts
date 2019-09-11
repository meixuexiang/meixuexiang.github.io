import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { GrowlModule } from 'primeng/components/growl/growl';
import { ButtonModule } from 'primeng/components/button/button';
import { OverlayPanelModule } from 'primeng/components/overlaypanel/overlaypanel';
import { PanelModule } from 'primeng/components/panel/panel';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';

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
    GrowlModule,
    OverlayPanelModule,

    RouterModule.forChild([{ path: '**', pathMatch: 'full', component: RegexpComponent }])
  ],
  declarations: [RegexpComponent],
  providers: []
})
export class RegexpModule { }

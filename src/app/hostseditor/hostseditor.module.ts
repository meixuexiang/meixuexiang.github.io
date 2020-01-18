import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HostseditorComponent } from './hostseditor/hostseditor.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ToastModule,
    ButtonModule,
    OverlayPanelModule,
    InputSwitchModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: HostseditorComponent }])
  ],
  declarations: [HostseditorComponent],
  providers: []
})
export class HostseditorModule { }

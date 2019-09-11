import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HostseditorComponent } from './hostseditor/hostseditor.component';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { GrowlModule, ButtonModule, OverlayPanelModule, InputSwitchModule } from 'primeng/primeng';

import { GrowlModule } from 'primeng/components/growl/growl';
import { ButtonModule } from 'primeng/components/button/button';
import { OverlayPanelModule } from 'primeng/components/overlaypanel/overlaypanel';
import { InputSwitchModule } from 'primeng/components/inputswitch/inputswitch';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    GrowlModule,
    ButtonModule,
    OverlayPanelModule,
    InputSwitchModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: HostseditorComponent }])
  ],
  declarations: [HostseditorComponent],
  providers: []
})
export class HostseditorModule { }

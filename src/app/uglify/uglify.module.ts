import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UglifyComponent } from './uglify/uglify.component';
import {
  // PanelModule,
  // PanelMenuModule,
  SidebarModule,
  InputTextareaModule,
  // SelectButtonModule,
  ButtonModule,
  GrowlModule,
  // AutoCompleteModule,
  // OverlayPanelModule,
  TooltipModule,
  FileUploadModule
} from 'primeng/primeng';
import { OptionsComponent } from './options/options.component';
import { ConfigService } from './config.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    // PanelModule,
    // PanelMenuModule,
    SidebarModule,
    InputTextareaModule,
    // SelectButtonModule,
    ButtonModule,
    GrowlModule,
    // AutoCompleteModule,
    // OverlayPanelModule,
    TooltipModule,
    FileUploadModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: UglifyComponent }])
  ],
  declarations: [UglifyComponent, OptionsComponent],
  providers: [ConfigService]
})
export class UglifyModule {}

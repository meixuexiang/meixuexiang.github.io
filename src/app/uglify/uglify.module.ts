import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UglifyComponent } from './uglify/uglify.component';
import { SidebarModule } from 'primeng/components/sidebar/sidebar';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { ButtonModule } from 'primeng/components/button/button';
import { GrowlModule } from 'primeng/components/growl/growl';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { FileUploadModule } from 'primeng/components/fileupload/fileupload';
import { OptionsComponent } from './options/options.component';
import { ConfigService } from './config.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SidebarModule,
    InputTextareaModule,
    ButtonModule,
    GrowlModule,
    TooltipModule,
    FileUploadModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: UglifyComponent }])
  ],
  declarations: [UglifyComponent, OptionsComponent],
  providers: [ConfigService]
})
export class UglifyModule { }

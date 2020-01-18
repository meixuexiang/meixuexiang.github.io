import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UglifyComponent } from './uglify/uglify.component';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { FileUploadModule } from 'primeng/fileupload';
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
    ToastModule,
    TooltipModule,
    FileUploadModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: UglifyComponent }])
  ],
  declarations: [UglifyComponent, OptionsComponent],
  providers: [ConfigService]
})
export class UglifyModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SxwnlComponent } from './sxwnl/sxwnl.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{ path: '', pathMatch: 'full', component: SxwnlComponent }])],
  declarations: [SxwnlComponent]
})
export class SxwnlModule {}

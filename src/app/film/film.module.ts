import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: IndexComponent }]),
    CoreModule,
    MatDividerModule
  ],
})
export class FilmModule { }

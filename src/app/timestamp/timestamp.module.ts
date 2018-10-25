import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TimestampComponent } from './timestamp/timestamp.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: TimestampComponent }])
  ],
  declarations: [TimestampComponent]
})
export class TimestampModule {}

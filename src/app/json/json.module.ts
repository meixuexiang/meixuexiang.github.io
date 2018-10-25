import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JsonComponent } from './json/json.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{ path: '', pathMatch: 'full', component: JsonComponent }])],
  declarations: [JsonComponent]
})
export class JsonModule {}

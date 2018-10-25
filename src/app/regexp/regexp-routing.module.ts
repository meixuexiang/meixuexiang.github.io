import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegexpComponent } from './regexp/regexp.component';

const routes: Routes = [{
  path: '**',
  pathMatch: 'full',
  component: RegexpComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegexpRoutingModule { }

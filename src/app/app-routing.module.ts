import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchpadComponent, routes } from './launchpad/launchpad.component';

const matchOthers: Routes = [
  {
    path: 'launchpad',
    component: LaunchpadComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    component: LaunchpadComponent
  },
];
const allRoutes: Routes = [...routes, ...matchOthers];
// console.log(allRoutes);

@NgModule({
  imports: [RouterModule.forRoot(allRoutes, { useHash: true, enableTracing: !true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

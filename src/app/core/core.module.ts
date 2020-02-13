import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';

import { ExplorerComponent } from './explorer/explorer.component';

@NgModule({
  declarations: [ExplorerComponent],
  imports: [
    CommonModule,
    MatTreeModule,
    MatIconModule,
  ],
  exports: [ExplorerComponent]
})
export class CoreModule { }

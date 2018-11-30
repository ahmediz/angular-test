import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    DragDropModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatCardModule,
    DragDropModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }

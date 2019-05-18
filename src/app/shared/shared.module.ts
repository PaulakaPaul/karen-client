import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullImageComponent } from './full-image/full-image.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [FullImageComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }

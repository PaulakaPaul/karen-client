import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionsComponent } from './submissions/submissions.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [SubmissionsComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SubmissionsModule { }

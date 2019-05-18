import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionsComponent } from './submissions/submissions.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SubmissionCardComponent } from './submission-card/submission-card.component';

@NgModule({
  declarations: [SubmissionsComponent, SubmissionCardComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SubmissionsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionsComponent } from './submissions/submissions.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SubmissionCardComponent } from './submission-card/submission-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FullImageComponent } from 'src/app/shared/full-image/full-image.component';

@NgModule({
  declarations: [SubmissionsComponent, SubmissionCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  exports: [SubmissionCardComponent],
  entryComponents: [FullImageComponent]
})
export class SubmissionsModule { }

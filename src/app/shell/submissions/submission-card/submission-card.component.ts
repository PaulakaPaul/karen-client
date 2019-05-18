import { Component, OnInit, Input } from '@angular/core';
import { Submission } from 'src/app/models/submission.model';
import { EventService } from 'src/app/services/event.service';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { FullImageComponent } from 'src/app/shared/full-image/full-image.component';

@Component({
  selector: 'app-submission-card',
  templateUrl: './submission-card.component.html',
  styleUrls: ['./submission-card.component.scss']
})
export class SubmissionCardComponent implements OnInit {

  @Input() submission: Submission;
  @Input() displayActions: boolean = true;

  constructor(
    private eventService: EventService,
    private errorHandler: ErrorHandlerService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit() {
  }

  accept() {
    this.eventService.acceptSubmission(this.submission.submissionId)
      .subscribe(data => {
        this.submission.status = 'ACCEPTED';
        this.snackBar.open("Submission accepted", "", { duration: 3000 });
      }, this.errorHandler.handle(this.snackBar))
  }

  decline() {
    this.eventService.declineSubmission(this.submission.submissionId)
      .subscribe(data => {
        this.submission.status = 'DECLINED';
        this.snackBar.open("Submission declined", "", { duration: 3000 });
      }, this.errorHandler.handle(this.snackBar))
  }

  fullimage(image: string) {
    this.dialog.open(FullImageComponent, {
      width: '700px',
      data: image
    });
  }

}

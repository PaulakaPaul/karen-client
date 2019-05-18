import { Component, OnInit, Input } from '@angular/core';
import { Submission } from 'src/app/models/submission.model';
import { EventService } from 'src/app/services/event.service';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-submission-card',
  templateUrl: './submission-card.component.html',
  styleUrls: ['./submission-card.component.scss']
})
export class SubmissionCardComponent implements OnInit {

  @Input() submission: Submission;

  constructor(
    private eventService: EventService,
    private errorHandler: ErrorHandlerService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log(this.submission)
  }

  accept() {
    this.eventService.acceptSubmission(this.submission.submissionId)
      .subscribe(data => {
        this.submission.status = 'ACCEPTED';
        this.snackBar.open("Submission accepted", "", { duration: 3000 });
      }, this.errorHandler.handle)
  }

  decline() {
    this.eventService.declineSubmission(this.submission.submissionId)
      .subscribe(data => {
        this.submission.status = 'DECLINED';
        this.snackBar.open("Submission declined", "", { duration: 3000 });
      }, this.errorHandler.handle(this.snackBar))
  }

}

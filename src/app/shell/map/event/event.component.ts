import { Component, OnInit, Input, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommentPostRequest, Comment } from 'src/app/models/comment.model';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event.model';
import { LoginService } from 'src/app/services/login.service';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { MatSnackBar } from '@angular/material';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit, AfterViewInit {

  @ViewChild('virtualScroll') virtualScroll: CdkVirtualScrollViewport;
  @Input() event: Event;
  commentForm: FormGroup;
  solutionForm: FormGroup;

  constructor(
    private eventService: EventService,
    private loginService: LoginService,
    private errorHandler: ErrorHandlerService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.commentForm = new FormGroup({
      message: new FormControl('')
    });

    this.solutionForm = new FormGroup({
      message: new FormControl(null, Validators.required),
      image: new FormControl(null, [Validators.required])
    });
  }

  ngAfterViewInit(): void {
  }

  onCommentSubmit() {
    const request = this.commentForm.value as CommentPostRequest;
    const comment = { ...request, message: request.message.trim() }
    if (request.message.trim() !== '') {
      this.eventService.postComment(this.event.eventId, comment)
        .subscribe(commentId => {
          this.commentForm.reset();
          const newComment: Comment = {
            commentId: commentId,
            message: comment.message,
            postedAt: new Date(),
            postedBy: {
              userId: this.loginService.getPayload().userId,
              name: this.loginService.getPayload().name
            }
          };
          this.event.comments.push(newComment);
          this.event.comments = [...this.event.comments];
        }, this.errorHandler.handle(this.snackBar));
    } else {
      this.commentForm.reset();
      this.snackBar.open("You cannot send an empty message", "", { duration: 3000 });
    }
  }

  onSolutionSubmit() {
    const blob = this.solutionForm.value.image.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    const self = this;
    reader.onload = () => {
      const base64image = reader.result as string;
      self.eventService.postSubmission(self.event.eventId, {
        message: self.solutionForm.value.message,
        image: base64image
      }).subscribe(submissionId => {
        self.snackBar.open("Successfully submitted", "", { duration: 3000 });
        self.solutionForm.reset();
        this.solutionForm.get('image').setValue(null);
      }, self.errorHandler.handle(this.snackBar));
    }
  }
}

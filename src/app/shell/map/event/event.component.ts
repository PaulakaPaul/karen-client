import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommentPostRequest, Comment } from 'src/app/models/comment.model';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() event: Event;
  commentForm: FormGroup;
  solutionForm: FormGroup;

  constructor(
    private eventService: EventService,
    private loginService: LoginService,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.commentForm = new FormGroup({
      message: new FormControl('')
    });

    this.solutionForm = new FormGroup({
      message: new FormControl(null, Validators.required),
      image: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
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
          this.event.comments.unshift(newComment);
          this.event.comments = [...this.event.comments];
        });
    }
  }

  onFileChange(event) {
    let reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.solutionForm.patchValue({
          image: reader.result
        });


        console.log(reader.result)
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

}

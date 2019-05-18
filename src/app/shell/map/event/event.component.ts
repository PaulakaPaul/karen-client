import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommentPostRequest } from 'src/app/models/comment.model';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() event: Event;
  commentForm: FormGroup;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.commentForm = new FormGroup({
      message: new FormControl('')
    });
  }

  onSubmit() {
    var request = this.commentForm.value as CommentPostRequest;
    if (request.message.trim() !== '') {
      this.eventService.postComment(this.event.eventId, request)
        .subscribe(commentId => console.log(commentId))
    }
  }

}

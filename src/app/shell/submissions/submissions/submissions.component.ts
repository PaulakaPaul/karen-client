import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event.model';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss']
})
export class SubmissionsComponent implements OnInit {

  events: Event[] = [];
  loading: boolean = true;
  constructor(
    private eventService: EventService,
    private errorHandler: ErrorHandlerService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(
      events => {
        this.events = events;
        this.loading = false;
      }, this.errorHandler.handle(this.snackBar)
    );
  }

}

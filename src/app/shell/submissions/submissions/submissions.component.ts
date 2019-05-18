import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event.model';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { FullImageComponent } from 'src/app/shared/full-image/full-image.component';

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
    private snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(
      events => {
        this.events = events;
        this.loading = false;
      }, this.errorHandler.handle(this.snackBar)
    );
  }

  fullimage(image: string) {
    this.dialog.open(FullImageComponent, {
      width: '700px',
      data: image
    });
  }

}

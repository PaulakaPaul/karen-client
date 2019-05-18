import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event.model';
import { EventService } from 'src/app/services/event.service';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  latitude: number = 45.7538355;
  longitude: number = 21.2257474;
  zoom: number = 14;

  events: Event[] = [];
  selectedEvent: Event = {
    image: 'data:image/jpeg;base64,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',
    eventId: '1',
    droneId: '2',
    coords: { latitude: 45.75, longitude: 21.22 },
    reportedAt: new Date(),
    comments: [
      {
        commentId: '1',
        message: 'Hello, I am good',
        postedAt: new Date(),
        postedBy: {
          userId: '1',
          name: 'Aurel'
        }
      },
      {
        commentId: '1',
        message: 'Hello, I am good',
        postedAt: new Date(),
        postedBy: {
          userId: '1',
          name: 'Aurel'
        }
      },
      {
        commentId: '1',
        message: 'Hello, I am good',
        postedAt: new Date(),
        postedBy: {
          userId: '1',
          name: 'Aurel'
        }
      },
      {
        commentId: '1',
        message: 'Hello, I am good',
        postedAt: new Date(),
        postedBy: {
          userId: '1',
          name: 'Aurel'
        }
      },
      {
        commentId: '1',
        message: 'Hello, I am good',
        postedAt: new Date(),
        postedBy: {
          userId: '1',
          name: 'Aurel'
        }
      },
      {
        commentId: '1',
        message: 'Hello, I am good',
        postedAt: new Date(),
        postedBy: {
          userId: '1',
          name: 'Aurel'
        }
      },
      {
        commentId: '1',
        message: 'Hello, I am good',
        postedAt: new Date(),
        postedBy: {
          userId: '1',
          name: 'Aurel'
        }
      },
      {
        commentId: '1',
        message: 'Hello, I am good',
        postedAt: new Date(),
        postedBy: {
          userId: '1',
          name: 'Aurel'
        }
      },
    ],
    submissions: [],
    status: 'OPENED'
  };

  constructor(
    private eventService: EventService,
    private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.eventService.getEvents().pipe(tap(console.log))
      .subscribe(e => this.events = e, this.errorHandler.handle);
  }

  selectEvent(event: Event) {
    console.log(event);
    this.selectedEvent = event;
  }

  unselectEvent() {
    this.selectedEvent = undefined;
  }

}

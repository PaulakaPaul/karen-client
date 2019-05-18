import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event.model';
import { EventService } from 'src/app/services/event.service';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  latitude: number = 45.7538355;
  longitude: number = 21.2257474;
  zoom: number = 14;
  loading: boolean = true;

  events: Event[] = [];
  selectedEvent: Event = undefined;

  constructor(
    private eventService: EventService,
    private errorHandler: ErrorHandlerService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.eventService.getEvents().pipe(tap(console.log))
      .subscribe(e => {
        this.events = e;
        this.loading = false;
      }, this.errorHandler.handle(this.snackBar));
  }

  selectEvent(event: Event) {
    console.log(event);
    this.selectedEvent = event;
  }

  unselectEvent() {
    this.selectedEvent = undefined;
  }

}

import { Component, OnInit } from '@angular/core';
import { DroneStatusService } from 'src/app/services/drone-status.service';
import { DroneStatus } from 'src/app/models/drone-status.model';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  status = {
    battery: '0',
    height: '0',
    speed: '0',
    flight_time: '0'
  };

  self = this;

  constructor(private droneStatusService: DroneStatusService) { }

  ngOnInit() {
    this.droneStatusService.receiveData((event) => this.handler(event));
  }

  private handler(event: MessageEvent) {
    console.log('raw', event.data);
    this.status = {...event.data};
  }

}

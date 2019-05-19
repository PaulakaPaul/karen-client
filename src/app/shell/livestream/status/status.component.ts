import { Component, OnInit } from '@angular/core';
import { DroneStatusService } from 'src/app/services/drone-status.service';
import { DroneStatus } from 'src/app/models/drone-status.model';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  status: DroneStatus = {
    battery: '0',
    height: '0',
    speed: '0',
    flight_time: '0'
  };

  constructor(private droneStatusService: DroneStatusService) { }

  ngOnInit() {
    this.droneStatusService.receiveData(this.handler);
  }

  private handler(event: MessageEvent) {
    var stat = event.data as DroneStatus
    console.log(stat);
    this.status = {
      battery: stat.battery ? stat.battery : this.status.battery,
      height: stat.height ? stat.height : this.status.height,
      speed: stat.speed ? stat.speed : this.status.speed,
      flight_time: stat.flight_time ? stat.flight_time : this.status.flight_time,
    }
  }

}

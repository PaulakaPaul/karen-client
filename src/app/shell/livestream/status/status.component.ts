import { Component, OnInit } from '@angular/core';
import { DroneStatusService } from 'src/app/services/drone-status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  //constructor(private droneStatusService: DroneStatusService) { }

  ngOnInit() {
    //this.droneStatusService.receiveData(this.handler);
  }

  private handler(event: MessageEvent) {
    console.log(event.data);
  }

}

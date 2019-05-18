import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  latitude: number = 45.7538355;
  longitude: number = 21.2257474;
  zoom: number = 14;
  constructor() { }

  ngOnInit() {
  }

}

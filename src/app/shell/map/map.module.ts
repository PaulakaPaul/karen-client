import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [MapComponent, EventComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBSyOq4Rl-qKeVfW4bKfSrA1-U04mHbGGo'
    })
  ]
})
export class MapModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivestreamComponent } from './livestream/livestream.component';
import { CommandsComponent } from './commands/commands.component';
import { VideoComponent } from './video/video.component';
import { StatusComponent } from './status/status.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [LivestreamComponent, CommandsComponent, VideoComponent, StatusComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class LivestreamModule { }

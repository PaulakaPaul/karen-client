import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { RouterModule } from '@angular/router';
import { MapModule } from './map/map.module';
import { SubmissionsModule } from './submissions/submissions.module';
import { LivestreamModule } from './livestream/livestream.module';

@NgModule({
  declarations: [ShellComponent],
  imports: [
    MapModule,
    LivestreamModule,
    SubmissionsModule,
    CommonModule,
    RouterModule
  ]
})
export class ShellModule { }

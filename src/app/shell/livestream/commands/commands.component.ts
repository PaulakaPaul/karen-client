import { Component, OnInit, OnDestroy } from '@angular/core';
import { DroneCommandService } from 'src/app/services/drone-command.service';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss']
})
export class CommandsComponent implements OnInit, OnDestroy {

  playing: boolean = false;

  constructor(private cmd: DroneCommandService) { }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.stop();
    this.stopVideo();
  }

  takeOff() {
    this.cmd.takeOff();
  }

  land() {
    this.cmd.land();
  }

  playVideo() {
    this.playing = true;
    this.cmd.startVideo();
  }

  stopVideo() {
    this.playing = false;
    this.cmd.stopVideo();
  }

  forward() {
    this.cmd.forward();
  }

  left() {
    this.cmd.left();
  }

  right() {
    this.cmd.right();
  }

  backwards() {
    this.cmd.backwards();
  }

  up() {
    this.cmd.up();
  }

  rotateLeft() {
    this.cmd.rotateCounterClockWise();
  }

  rotateRight() {
    this.cmd.rotateClockWise();
  }

  down() {
    this.cmd.down();
  }

  stop() {
    this.cmd.stop();
  }
}

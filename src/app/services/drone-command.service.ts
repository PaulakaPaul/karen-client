import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Commands } from '../models/commands.model';

@Injectable({
  providedIn: 'root'
})
export class DroneCommandService {

  socket: WebSocket;

  constructor() {
    this.socket = new WebSocket(`${environment.pythonWs}/command`);
  }

  takeOff() {
    this.socket.send(Commands.TAKEOFF);
  }

  land() {
    this.socket.send(Commands.LAND);
  }

  stop() {
    this.socket.send(Commands.STOP);
  }

  forward() {
    this.socket.send(Commands.FORWARD);
  }

  backwards() {
    this.socket.send(Commands.BACKWARDS);
  }

  left() {
    this.socket.send(Commands.LEFT);
  }

  right() {
    this.socket.send(Commands.RIGHT);
  }

  up() {
    this.socket.send(Commands.UP);
  }

  down() {
    this.socket.send(Commands.DOWN);
  }

  rotateClockWise() {
    this.socket.send(Commands.R_CW);
  }

  rotateCounterClockWise() {
    this.socket.send(Commands.R_CCW);
  }

  flipRight() {
    this.socket.send(Commands.F_R);
  }

  flipLeft() {
    this.socket.send(Commands.F_L);
  }

  flipForward() {
    this.socket.send(Commands.F_F);
  }

  flipBackwards() {
    this.socket.send(Commands.F_B);
  }

  startVideo() {
    this.socket.send(Commands.START_VIDEO);
  }

  stopVideo() {
    this.socket.send(Commands.STOP_VIDEO);
  }
}

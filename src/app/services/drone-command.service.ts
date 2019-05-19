import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Commands } from '../models/commands.model';

@Injectable({
  providedIn: 'root'
})
export class DroneCommandService {

  canSend: boolean = false;
  socket: WebSocket;

  constructor() {
    this.socket = new WebSocket(`${environment.pythonWs}/command`);
    this.socket.onopen = () => {
      this.canSend = true;
      console.log('you can now send commands')
    }
  }

  takeOff() {
    if (this.canSend)
      this.socket.send(Commands.TAKEOFF);
  }

  land() {
    if (this.canSend)
      this.socket.send(Commands.LAND);
  }

  stop() {
    if (this.canSend)
      this.socket.send(Commands.STOP);
  }

  forward() {
    if (this.canSend)
      this.socket.send(Commands.FORWARD);
  }

  backwards() {
    if (this.canSend)
      this.socket.send(Commands.BACKWARDS);
  }

  left() {
    if (this.canSend)
      this.socket.send(Commands.LEFT);
  }

  right() {
    if (this.canSend)
      this.socket.send(Commands.RIGHT);
  }

  up() {
    if (this.canSend)
      this.socket.send(Commands.UP);
  }

  down() {
    if (this.canSend)
      this.socket.send(Commands.DOWN);
  }

  rotateClockWise() {
    if (this.canSend)
      this.socket.send(Commands.R_CW);
  }

  rotateCounterClockWise() {
    if (this.canSend)
      this.socket.send(Commands.R_CCW);
  }

  flipRight() {
    if (this.canSend)
      this.socket.send(Commands.F_R);
  }

  flipLeft() {
    if (this.canSend)
      this.socket.send(Commands.F_L);
  }

  flipForward() {
    if (this.canSend)
      this.socket.send(Commands.F_F);
  }

  flipBackwards() {
    if (this.canSend)
      this.socket.send(Commands.F_B);
  }

  startVideo() {
    if (this.canSend)
      this.socket.send(Commands.START_VIDEO);
  }

  stopVideo() {
    if (this.canSend)
      this.socket.send(Commands.STOP_VIDEO);
  }
}

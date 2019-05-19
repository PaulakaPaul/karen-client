import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Commands } from '../models/commands.model';

@Injectable({
  providedIn: 'root'
})
export class DroneCommandService {

  canSend: boolean = false;
  socket: WebSocket;
  stopped: boolean = true;
  timer: number = 500;

  constructor() {
    this.socket = new WebSocket(`${environment.pythonWs}/command`);
    this.socket.onopen = () => {
      this.canSend = true;
      console.log('you can now send commands')
    }
  }

  checkSocket() {
    if (this.socket.CLOSED || this.socket.CLOSING) {
      this.socket = new WebSocket(`${environment.pythonWs}/command`);
    }
  }

  takeOff(init: boolean = true) {
    if (init)
      this.stopped = false;
    if (this.canSend && (!this.stopped)) {
      this.checkSocket();
      this.socket.send(Commands.TAKEOFF);
      console.log(Commands.TAKEOFF);
      setTimeout(() => this.takeOff(false), this.timer)
    }
  }

  land(init: boolean = true) {
    if (init)
      this.stopped = false;
    if (this.canSend && !this.stopped) {
      this.checkSocket();
      this.socket.send(Commands.LAND);
      console.log(Commands.LAND);
      setTimeout(() => this.land(false), this.timer)
    }
  }

  stop() {
    if (this.canSend) {
      this.checkSocket();
      this.socket.send(Commands.STOP);
      console.log(Commands.STOP)
      this.stopped = true;
    }
  }

  forward(init = true) {
    if (init)
      this.stopped = false;
    if (this.canSend && !this.stopped) {
      this.checkSocket();
      this.socket.send(Commands.FORWARD);
      console.log(Commands.FORWARD);
      setTimeout(() => this.forward(false), this.timer)
    }
  }

  backwards(init = true) {
    if (init)
      this.stopped = false;
    if (this.canSend && !this.stopped) {
      this.checkSocket();
      this.socket.send(Commands.BACKWARDS);
      console.log(Commands.BACKWARDS);
      setTimeout(() => this.backwards(false), this.timer)
    }
  }

  left(init = true) {
    if (init)
      this.stopped = false;
    if (this.canSend && !this.stopped) {
      this.checkSocket();
      this.socket.send(Commands.LEFT);
      console.log(Commands.LEFT);
      setTimeout(() => this.left(false), this.timer)
    }
  }

  right(init = true) {
    if (init)
      this.stopped = false;
    if (this.canSend && !this.stopped) {
      this.checkSocket();
      this.socket.send(Commands.RIGHT);
      console.log(Commands.RIGHT);
      setTimeout(() => this.right(false), this.timer)
    }
  }

  up(init = true) {
    if (init)
      this.stopped = false;
    if (this.canSend && !this.stopped) {
      this.checkSocket();
      this.socket.send(Commands.UP);
      console.log(Commands.UP);
      setTimeout(() => this.up(false), this.timer)
    }
  }

  down(init = true) {
    if (init)
      this.stopped = false;
    if (this.canSend && !this.stopped) {
      this.checkSocket();
      this.socket.send(Commands.DOWN);
      console.log(Commands.DOWN);

      setTimeout(() => this.down(false), this.timer)
    }
  }

  rotateClockWise(init = true) {
    if (init)
      this.stopped = false;
    if (this.canSend && !this.stopped) {
      this.checkSocket();
      this.socket.send(Commands.R_CW);
      console.log(Commands.R_CW);
      setTimeout(() => this.rotateClockWise(false), this.timer)
    }
  }

  rotateCounterClockWise(init = true) {
    if (init)
      this.stopped = false;
    if (this.canSend && !this.stopped) {
      this.checkSocket();
      this.socket.send(Commands.R_CCW);
      console.log(Commands.R_CCW);
      setTimeout(() => this.rotateCounterClockWise(false), this.timer)
    }
  }

  flipRight() {
    this.stopped = false;
    if (this.canSend && !this.stopped) {
      this.checkSocket();
      this.socket.send(Commands.F_R);
      console.log(Commands.F_R);

      setTimeout(this.flipRight, this.timer)
    }
  }

  flipLeft() {
    this.stopped = false;
    if (this.canSend && !this.stopped) {
      this.checkSocket();
      this.socket.send(Commands.F_L);
      console.log(Commands.F_L);

      setTimeout(this.flipLeft, this.timer)
    }
  }

  flipForward() {
    this.stopped = false;
    if (this.canSend && !this.stopped) {
      this.checkSocket();
      this.socket.send(Commands.F_F);
      console.log(Commands.F_F);

      setTimeout(this.flipForward, this.timer)
    }
  }

  flipBackwards() {
    this.stopped = false;
    if (this.canSend && !this.stopped) {
      this.checkSocket();
      this.socket.send(Commands.F_B);
      console.log(Commands.F_B);

      setTimeout(this.flipBackwards, this.timer)
    }
  }

  startVideo() {
    if (this.canSend)
      this.socket.send(Commands.START_VIDEO);
    this.checkSocket();
  }

  stopVideo() {
    if (this.canSend)
      this.socket.send(Commands.STOP_VIDEO);
    this.checkSocket();
  }
}

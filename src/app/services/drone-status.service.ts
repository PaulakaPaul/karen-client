import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DroneStatusService {

  socket: WebSocket;
  constructor() {
    this.socket = new WebSocket(`${environment.pythonWs}/status`);
  }

  receiveData(callback: (event: MessageEvent) => void) {
    this.socket.onmessage = callback;
  }
}

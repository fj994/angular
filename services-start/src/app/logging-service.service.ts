import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingServiceService {

  constructor() { }

  statusLog(status: string) {
    console.log("A server status has changed, new status: " + status);
  }
}

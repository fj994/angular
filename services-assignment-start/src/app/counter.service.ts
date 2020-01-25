import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInactiveCounter: number = 0;
  inactiveToActiveCounter: number = 0;
  
  activeToInactive() {
    this.activeToInactiveCounter++;
    console.log("Active to inactive: " + this.activeToInactiveCounter);
  }

  inactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log("Inactive to active: " + this.inactiveToActiveCounter);
  }
}

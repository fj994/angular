import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers = [];
  evenNumbers = [];

  onEventEmit(emitedNumber: number) {
    emitedNumber % 2 === 0 ? this.evenNumbers.push(emitedNumber) : this.oddNumbers.push(emitedNumber);
  }
}

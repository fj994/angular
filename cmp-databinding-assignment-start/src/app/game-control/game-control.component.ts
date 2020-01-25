import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() counterEvent = new EventEmitter<number>();
  interval;
  iteratingNumber = 1;
  constructor() { }

  ngOnInit() {
  }

  startCounter() {
    this.interval = setInterval(() => {
      this.counterEvent.emit(this.iteratingNumber++);
    }, 1000);
  }

  stopCounter() {
    clearInterval(this.interval);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ass3';
  showDetails = false;
  buttonLogs = [];

  onButtonClick () {
    this.showDetails = !this.showDetails;
    this.buttonLogs.push(new Date());    
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = '';
  serverCreated = false;
  servers = ['testServer', 'testServer 2']
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    } ,2000);
   }

  ngOnInit() {
  }

  onCreateServer(name) {
    this.serverCreated = true;
    this.servers.push(this.serverName); 
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    
  }
}

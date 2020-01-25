import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { relative } from 'path';
import { CanDeactivateGuard, canComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, canComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;
   
  constructor(private serversService: ServersService, 
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit() {
    this.server = this.serversService.getServer(+this.route.snapshot.params['id']);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.route.queryParams.subscribe(
      (queryParams) => this.allowEdit = queryParams['allowEdit'] === '1' ? true : false
    );
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.allowEdit) {
      return true;
    } 
    else if (this.changesSaved) {
      return true;
    } 
    else if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('Are you sure you want to exit?');
    } 
    else {
      return true;
    }
  }
}

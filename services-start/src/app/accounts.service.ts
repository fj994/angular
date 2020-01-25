import { Injectable, EventEmitter } from '@angular/core';
import { LoggingServiceService } from './logging-service.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated: EventEmitter<string> = new EventEmitter();

  constructor(private loggingService: LoggingServiceService) { }

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.statusLog(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.statusLog(status);
  }
}

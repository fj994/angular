import { Component, EventEmitter, Output } from '@angular/core';

import { LoggingServiceService } from '../logging-service.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingServiceService]
})

export class NewAccountComponent {
  constructor(private loggingService: LoggingServiceService,
              private accountsService: AccountsService) { 
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus)
  }
}

import { Injectable } from '@angular/core';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  loggedIn = false;

  constructor() { }

  isAuthenticated(): Promise<any> {
    const promise = new Promise(
       (resolve, reject) => {
          setTimeout(() => {
          resolve(this.loggedIn)
        }, 800);
       }
    );
    return promise;
  }

  loggIn() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }
}

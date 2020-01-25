import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface canComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<canComponentDeactivate> {

  canDeactivate(component: canComponentDeactivate,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextstate?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            
    return component.canDeactivate();
  }
}

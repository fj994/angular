import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    const customObservable = Observable.create(observer => {
      let count = 0;
      setInterval(()=>{
        observer.next(count);
        count++;
      }, 1000);
    });
  
    this.firstObsSubscription = customObservable.subscribe(
      data => {
        console.log(data);
      }
    );
  }
  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }
}

import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges{
  @Input('srvElement') element: {type: string, name: string, content: string };
  
  constructor() { 
    console.log('contr called');
    
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onchanges!');
    console.log(changes);
    
  }

  ngOnInit() {
    console.log('ng on init cal');

  }

}

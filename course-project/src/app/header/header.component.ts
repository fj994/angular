import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() pageRouting = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  goToRecipes() {
    this.pageRouting.emit('recipes');
  }

  goToShoppingList() {
    this.pageRouting.emit('shoppingList');
  }
}

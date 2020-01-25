import { Component, OnInit, ViewChild } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f', {static: false}) slForm: NgForm;
  editedIngredientIndex: number;
  editMode = false;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListService.editedIngredient.subscribe(
      (id) => {
        this.editedIngredientIndex = id;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(id);
        this.slForm.setValue({
          'name': this.editedItem.name,
          'amount': this.editedItem.amount
        });
      }
    );
  }

  clearForm() {
    this.editMode = false;
    this.slForm.reset();
  }

  deleteIngredient() {
    this.shoppingListService.deleteIngredient(this.editedIngredientIndex);
    this.clearForm();
  }

  onAddItem(form: NgForm) {
    const ingredient = new Ingredient(form.value.name, form.value.amount);

    if(this.editMode) {
      this.shoppingListService.updateIngredient(this.editedIngredientIndex, ingredient);
    } else {       
      this.shoppingListService.addIngredient(ingredient);
    }
    this.editMode = false;
    form.reset();
  }

  // onAddButton() {
  //   const name = this.recipeNameInput.nativeElement.value;
  //   const amount = this.recipeAmountInput.nativeElement.value;
  //   this.shoppingListService.addIngredient(new Ingredient(name, amount));
  // }
}

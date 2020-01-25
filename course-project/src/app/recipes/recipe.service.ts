import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel','A super-tasty Schnitzel','https://cdn.pixabay.com/photo/2019/10/09/19/47/cordon-4538108_960_720.jpg', [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 10)
    ]),
    new Recipe('Big Fat Burger','What else you need to say?','https://live.staticflickr.com/65535/48436448591_9dc8a78ee2_b.jpg', [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1),
      new Ingredient('salad', 1)
    ])
  ];
  
  selectedRecipeEmiter: Subject<Recipe> = new Subject();
  recipesChangedSubject: Subject<Recipe[]> = new Subject();

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChangedSubject.next(...[this.recipes]);
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChangedSubject.next(...[this.recipes]);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChangedSubject.next(...[this.recipes]);
  }
}

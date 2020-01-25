import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  index: number;
  dropdownOpen: boolean = false;

  constructor(private recipeService: RecipeService, 
              private shoppingListService: ShoppingListService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.index = params['index'];
        this.recipe = this.recipeService.getRecipe(this.index);
      }
    )    
  }

  onAddToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);    
  }

  onDeleteRecipe() {
    if (confirm('Are you sure you want to delete recipe?')) {
      this.recipeService.deleteRecipe(this.index);
      this.router.navigate(['..'], {relativeTo: this.route});
    }
  }
}

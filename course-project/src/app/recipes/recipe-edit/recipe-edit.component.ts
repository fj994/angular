import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  editForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['index'];
        this.editMode = params['index'] != null;
        this.initForm();
      }
    );
  }

  initForm() {
    let recipe: Recipe = new Recipe('', '', '', []);
    let ingredientsArray= new FormArray([]);
    
    if(this.editMode) {
      recipe = this.recipeService.getRecipe(this.id);
      recipe.ingredients.forEach(ingredient => {
        ingredientsArray.push(
          new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, 
              [Validators.required, 
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
          })
        )
      });
    }

    this.editForm = new FormGroup({
      'name': new FormControl(recipe.name, Validators.required),
      'imagePath': new FormControl(recipe.imagePath, Validators.required),
      'description': new FormControl(recipe.description, Validators.required),
      'ingredients': ingredientsArray
    });
  }

  getIngredients() {
    return (<FormArray>this.editForm.get('ingredients')).controls;
  }

  deleteIngredient(index: number) {
    (<FormArray>this.editForm.get('ingredients')).removeAt(index);
  }
  
  addIngredient(index) {
     const newGroup = new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, 
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      });
    (<FormArray>this.editForm.get('ingredients')).push(newGroup);
  }

  onSubmit() {
    if(this.editMode){
      this.recipeService.updateRecipe(this.id, this.editForm.value);
    } else {
      this.recipeService.addRecipe(this.editForm.value);
    }
    this.router.navigate(['/recipes']);
  }
}

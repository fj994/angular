import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { DefaultComponent } from './recipes/default/default.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: DefaultComponent},
    {path: 'new-recipe', component: RecipeEditComponent },
    {path: ':index', component: RecipeDetailComponent},
    {path: ':index/edit', component: RecipeEditComponent}
  ]},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'shopping-list/:id', component: ShoppingListComponent},
  {path: '**', redirectTo: '/recipes'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    [RouterModule]
  ]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Shnitzel',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2019/03/25/20/20/schnitzel-4081269__340.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe(
      'Big Fat Burger',
      'This is simply a test',
      'https://c.pxhere.com/images/81/7f/ac5c059175a4957415613fa9f36c-1586557.jpg!d',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }
}

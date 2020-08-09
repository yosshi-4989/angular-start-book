import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe/recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipedata: Recipe[];

  constructor(private rsv: RecipeService) { }

  ngOnInit() {
    this.recipedata = this.rsv.getRecipedata();
  }

  searchRecipe(keyword: string): void {
    this.recipedata = this.rsv.searchRecipe(keyword);
  }

}

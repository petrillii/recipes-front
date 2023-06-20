import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipesService } from '../services/recipes.service';
import { RecipesModel } from '../models/recipes.model';

@Component({
  selector: 'app-recipe-carousel',
  templateUrl: './recipe-carousel.component.html',
  styleUrls: ['./recipe-carousel.component.scss']
})
export class RecipeCarouselComponent implements OnInit {
  recipes: RecipesModel[] = [];

  constructor(
    private recipesService: RecipesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.recipesService.recipes$.subscribe(recipes => {
      this.recipes = recipes;
    });

    this.getRecipes();
  }

  getRecipes(): void {
    this.recipesService.getRecipesApi().subscribe(recipes => {
      this.recipesService.setRecipes(recipes);
    });
  }

  redirectToDetails(recipeId: number) {
    this.router.navigate(['/recipe', recipeId]);
  }
}

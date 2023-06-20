import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../services/recipes.service';
import { RecipeDetailModel } from '../models/recipe-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe?: RecipeDetailModel;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipesService,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      let recipeId = +params['id'];
      this.recipeService.getRecipeById(recipeId).subscribe(recipe =>{
        this.recipe = recipe;
      })
    });
  }

  deleteRecipe(id?: number): void {
    this.recipeService.deleteRecipeById(id).subscribe(res =>{
      if(res){
        this.toastrService.success('teste')
        this.router.navigate(['/home']);
      }
    })
  }

  editRecipe(){

  }

}

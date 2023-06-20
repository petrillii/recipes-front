import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CreateRecipeService } from 'src/app/shared/services/create-recipe.service';
import { CategoryModel } from 'src/app/modules/home/models/category.model';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit{
  recipeForm: FormGroup;
  categories: CategoryModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private createRecipeService: CreateRecipeService
    ) {
    this.recipeForm = this.formBuilder.group({
      title: ['', Validators.required],
      ingredients: ['', Validators.required],
      instructions: ['', Validators.required],
      category_id: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.createRecipeService.getCategories().subscribe(categories =>{
      this.categories = categories
    })
  }

  saveRecipe() {
    if (this.recipeForm.valid) {
      this.createRecipeService.createRecipe(this.recipeForm.value).subscribe(
        (response) => {
          console.log(response); // Exemplo: exibir a resposta da API
          this.recipeForm.reset(); // Limpar os campos do formulário
        },
        (error) => {
          console.log(error); // Exemplo: lidar com o erro da API
        }
      );
    }
  }
}

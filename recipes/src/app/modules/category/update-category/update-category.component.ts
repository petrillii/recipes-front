import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { CreateRecipeService } from 'src/app/shared/services/create-recipe.service';
import { CategoryModel } from '../../home/models/category.model';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent {
  categories: CategoryModel[] = [];
  category: number = 0;
  newName: string = '';

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoriesService,
    private createRecipeService: CreateRecipeService
  ) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
    this.createRecipeService.getCategories().subscribe(categories =>{
      this.categories = categories
    })
  }

  updateCategory() {
    if(this.newName != ''){
      this.categoryService.updateCategory(this.category, this.newName).subscribe(
        (response: any) => {
          console.log('Categoria atualizada com sucesso');
          this.newName = '';
          this.getCategories();
        },
        (error: any) => {
          console.error(error);
        }
      );
    }

  }
}

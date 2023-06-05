import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
  category = {
    name: ''
  };

  constructor(
    private categoriesService: CategoriesService
  ) {

  }

  ngOnInit(): void {
  }

  createCategory(){
    if(this.category.name){
      this.categoriesService.createCategory(this.category).subscribe(res =>{
        this.category.name = '';
      })
    }

  }

}

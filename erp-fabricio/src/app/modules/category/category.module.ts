import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateCategoryComponent,
    UpdateCategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CategoryModule { }

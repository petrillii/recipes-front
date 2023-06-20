import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeCarouselComponent } from './recipe-carousel/recipe-carousel.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';



@NgModule({
  declarations: [
    HomeComponent,
    RecipeCarouselComponent,
    RecipeDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }

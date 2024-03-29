import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';
import { LoginComponent } from './modules/authentication/login/login.component';
import { RegisterComponent } from './modules/authentication/register/register.component';
import { HomeComponent } from './modules/home/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ForgotPasswordComponent } from './modules/authentication/forgot-password/forgot-password.component';
import { RecipeDetailsComponent } from './modules/home/recipe-details/recipe-details.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { CreateCategoryComponent } from './modules/category/create-category/create-category.component';
import { UpdateCategoryComponent } from './modules/category/update-category/update-category.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full',
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'forgot-password', component: ForgotPasswordComponent
  },
  {
    path: 'about', component: AboutUsComponent
  },
  {
    path: 'recipe/:id', component: RecipeDetailsComponent
  },
  {
    path: 'create-recipe', component: CreateRecipeComponent
  },
  {
    path: 'create-category', component: CreateCategoryComponent
  },
  {
    path: 'update-category', component: UpdateCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RecipesModel } from '../models/recipes.model';
import { environment } from 'src/environments/environment';
import { RecipeDetailModel } from '../models/recipe-detail.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  public recipes$ = new BehaviorSubject<RecipesModel[]>([]);
  private url = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Obtém todas as receitas
   */
  getRecipesApi(): Observable<RecipesModel[]>{
    return this.http.get<RecipesModel[]>(this.url + '/recipes');
  }

  /**
   *
   * @param recipeId
   */
  getRecipeById(recipeId: number): Observable<RecipeDetailModel>{
    return this.http.get<RecipeDetailModel>(this.url + `recipes/${recipeId}/details`)
  }

  setRecipes(recipes: RecipesModel[]){
    this.recipes$.next(recipes);
  }

  exportRecipes(){
    return this.http.get(this.url + 'recipes/export', { responseType: 'blob' })
  }

  deleteRecipeById(id?: number): Observable<any>{
    return this.http.delete(this.url + `/recipes/${id}`)
  }

  getRecipes(): RecipesModel[]{
    return this.recipes$.getValue();
  }
}

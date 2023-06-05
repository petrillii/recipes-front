import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RecipesModel } from '../models/recipes.model';
import { environment } from 'src/environments/environment';

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

  setRecipes(recipes: RecipesModel[]){
    this.recipes$.next(recipes);
  }

  getRecipes(): RecipesModel[]{
    return this.recipes$.getValue();
  }
}

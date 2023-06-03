import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipesModel } from '../models/recipes.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private url = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Obtém todas as receitas
   */
  getRecipes(): Observable<RecipesModel[]>{
    return this.http.get<RecipesModel[]>(this.url + '/recipes');
  }
}

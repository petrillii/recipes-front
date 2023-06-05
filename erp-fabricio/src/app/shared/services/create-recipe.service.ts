import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from 'src/app/modules/home/models/category.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateRecipeService {
  private url = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Obtém todas as categorias
   */
  getCategories(): Observable<CategoryModel[]>{
    return this.http.get<CategoryModel[]>(this.url + '/categories');
  }

  createRecipe(recipe: any): Observable<any>{
    return this.http.post<any>(this.url + '/recipes', recipe);
  }
}

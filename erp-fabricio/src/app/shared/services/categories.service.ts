import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private url = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  createCategory(categoryName: any): Observable<any>{
    return this.http.post<any>(this.url + '/categories', categoryName);
  }

  updateCategory(id: any, name: string): Observable<any>{
    return this.http.put<any>(this.url + `/categories/${id}`, {'name': name});
  }
}

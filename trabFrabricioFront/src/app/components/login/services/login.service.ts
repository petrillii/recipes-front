import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://viacep.com.br/ws'

  constructor(private http: HttpClient) { }

  obterCep(cep: string): Observable<any>{
    const url = `${this.apiUrl}/${cep}/json`;

    return this.http.get<any>(url);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/login.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = `${environment.apiUrl}/login`;

  constructor(private http: HttpClient) { }

  login(login: LoginModel): Observable<string>{
    return this.http.post<string>(this.url, login);
  }

}

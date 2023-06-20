import { LoginResetPasswordModel } from './../models/login-reset-password.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login.model';
import { environment } from 'src/environments/environment';
import { LoginRegisterModel } from '../models/login-register.model';
import { HttpResultModel } from 'src/app/shared/models/http-result.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  /**
   *
   * Realiza login
   * @param LoginModel
   */
  login(loginModel: LoginModel): Observable<HttpResultModel> {
    return this.http.post<HttpResultModel>(this.url + 'login', loginModel);
  }

  /**
   *
   * Cadastra usuário
   * @param loginRegisterModel
   */
  register(loginRegisterModel: LoginRegisterModel): Observable<HttpResultModel> {
    return this.http.post<HttpResultModel>(this.url + 'register', loginRegisterModel);
  }

  /**
   * Troca senha do usuário
   * @param LoginResetPasswordModel
   */
  resetPassword(resetPassword: LoginResetPasswordModel): Observable<HttpResultModel> {
    return this.http.put<HttpResultModel>(this.url + 'resetPassword', resetPassword);
  }
}

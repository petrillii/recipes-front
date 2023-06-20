import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  login() {
    // lógica de login e autenticação aqui
    // Verifica as credenciais e define isAuthenticated para true se o login for bem-sucedido
    this.isAuthenticated$.next(true);
  }

  logout() {
    // Simule a lógica de logout aqui
    // Defina isAuthenticated para false ao fazer logout
    this.isAuthenticated$.next(false);
  }

  isAuthenticated() {
    return this.isAuthenticated$.asObservable();
  }
}

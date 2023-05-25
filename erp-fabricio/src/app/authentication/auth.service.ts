import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated$ = new BehaviorSubject<boolean>(false);
  private userRole$ = new BehaviorSubject<string>('');

  constructor() { }

  login(role: string) {
    // lógica de login e autenticação aqui
    // Verifica as credenciais e define isAuthenticated para true se o login for bem-sucedido
    this.isAuthenticated$.next(true);
    this.userRole$.next(role);
  }

  logout() {
    // Simule a lógica de logout aqui
    // Defina isAuthenticated para false ao fazer logout
    this.isAuthenticated$.next(false);
    this.userRole$.next('');
  }

  isAuthenticated() {
    return this.isAuthenticated$.asObservable();
  }

  getUserRole() {
    return this.userRole$.asObservable();
  }
}

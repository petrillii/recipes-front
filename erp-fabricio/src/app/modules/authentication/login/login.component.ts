import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    this.authService.login('ADMIN');
    this.router.navigate(['/home']);
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      // Lógica para verificar as credenciais de login
      if (username === 'usuario' && password === 'senha') {
        // Lógica para redirecionar o usuário após o login bem-sucedido
        console.log('Login bem-sucedido!');
      } else {
        this.errorMessage = 'Credenciais inválidas. Por favor, tente novamente.';
      }
    }
  }

  register() {
    this.router.navigate(['/register']);
  }
}

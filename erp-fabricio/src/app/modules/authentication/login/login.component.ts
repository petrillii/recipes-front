import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';
import { LoginService } from '../services/login.service';
import { LoginModel } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required, Validators.email],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });
  errorMessage?: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private loginService: LoginService) { }

  ngOnInit() {
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    if (this.loginForm.valid) {
      const loginData: LoginModel = this.loginForm.value;

      this.loginService.login(loginData).subscribe(
        (response) => {
          if (response.statusCode === 200) {
            this.authService.login();
            this.router.navigate(['/home']);
          } else {
            this.errorMessage = response.message;
          }
        }
      );
    }
  }

  register() {
    this.router.navigate(['/register']);
  }
}

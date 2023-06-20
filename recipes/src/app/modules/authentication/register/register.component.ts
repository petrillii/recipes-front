import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { LoginRegisterModel } from '../models/login-register.model';
import { AuthService } from 'src/app/authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, { validators: this.passwordMatchValidator });

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router) {}

  ngOnInit(): void {
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      form.get('confirmPassword')?.setErrors(null);
    }
  }

  register() {
    if (this.registerForm.invalid) {
      return;
    }
    const loginRegisterModel: LoginRegisterModel = new LoginRegisterModel(this.username?.value, this.password?.value, this.email?.value);
    this.loginService.register(loginRegisterModel).subscribe(
      (response) => {
        if (response.statusCode) {
          this.authService.login();
          this.router.navigate(['/home']);
        } else {
          console.error("Ocorreu um erro")
        }
      }
    );
  }

  get username() { return this.registerForm.get('username'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }
}

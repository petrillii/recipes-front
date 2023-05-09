import { LoginService } from './services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from './models/login.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  constructor(
    private fb: FormBuilder,
    private LoginService: LoginService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginModel = new LoginModel(this.loginForm.value)
      this.LoginService.login(loginModel).subscribe(
        (data) => {
          this.toastr.success('Sucesso', data);
        },
        (error) => {
          this.toastr.error('Error', error);
        }
      );
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginResetPasswordModel } from '../models/login-reset-password.model';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    newPassword: ['', Validators.required],
    newPasswordConfirm: ['', Validators.required]
  }, { validators: this.passwordMatchValidator });

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ){

  }
  ngOnInit() {

  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('newPassword')?.value;
    const confirmPassword = form.get('newPasswordConfirm')?.value;

    if (password !== confirmPassword) {
      form.get('newPasswordConfirm')?.setErrors({ mismatch: true });
    } else {
      form.get('newPasswordConfirm')?.setErrors(null);
    }
  }

  get email() {
    return this.resetPasswordForm.get('email');
  }
  get newPassword() {
    return this.resetPasswordForm.get('newPassword');
  }
  get newPasswordConfirm() {
    return this.resetPasswordForm.get('newPasswordConfirm');
  }

  resetPassword(){
    if(this.resetPasswordForm.valid){
      const resetPasswordModel: LoginResetPasswordModel = new LoginResetPasswordModel(this.email?.value, this.newPassword?.value);

      this.loginService.resetPassword(resetPasswordModel).subscribe(res=>{
        if(res.statusCode === 200){
          this.router.navigate(['/login']);
        }
        else{

        }
      })
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = this.fb.group({
    usuario: ['', Validators.required],
    senha: ['', [Validators.required, Validators.minLength(8)]]
  })

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {

  }

  onSubmit(){
    console.log(this.formLogin.valid);
  }

}

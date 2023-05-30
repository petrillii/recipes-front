import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = this.formBuilder.group({
    nome: ['', Validators.required],
    sobrenome: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', Validators.required],
    confirmarSenha: ['', Validators.required]
  }, { validators: this.passwordMatchValidator });;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

  passwordMatchValidator(form: FormGroup) {
    const senha = form.get('senha')?.value;
    const confirmarSenha = form.get('confirmarSenha')?.value;

    if (senha !== confirmarSenha) {
      form.get('confirmarSenha')?.setErrors({ mismatch: true });
    } else {
      form.get('confirmarSenha')?.setErrors(null);
    }
  }

  register() {
    if (this.registerForm.invalid) {
      return;
    }

    // Lógica para realizar o cadastro
    console.log('Cadastro realizado com sucesso');
  }

  get nome() { return this.registerForm.get('nome'); }
  get sobrenome() { return this.registerForm.get('sobrenome'); }
  get email() { return this.registerForm.get('email'); }
  get senha() { return this.registerForm.get('senha'); }
  get confirmarSenha() { return this.registerForm.get('confirmarSenha'); }
}

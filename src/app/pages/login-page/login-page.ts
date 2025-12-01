import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormUtils } from '../form-utils';

const USER = {
  email: 'usuario@ups.edu.ec',
  password: '234567'
};

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

  errorMessage = '';
  form: any; 

  constructor(private fb: FormBuilder, private router: Router) {

   
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { email, password } = this.form.value;

    if (email === USER.email && password === USER.password) {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Credenciales incorrectas';
    }
  }

  utils = FormUtils;
}

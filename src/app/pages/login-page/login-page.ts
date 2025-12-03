import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-page.html', 
})
export class LoginPage { 
  
  private fb = inject(FormBuilder);
  private router = inject(Router);
  
  // Señal para el mensaje de error general
  errorMessage = signal<string | null>(null);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]], 
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.value;

    if (email === 'usuario@ups.edu.ec' && password === '123456') {
      this.errorMessage.set(null);
      this.router.navigate(['/home']);
    } else {
      this.errorMessage.set('Credenciales incorrectas'); 
    }
  }

 isValidField(field: string): boolean | null {
    const control = this.loginForm.get(field);
    return control && control.errors && control.touched ? true : null;
  }
}
import { Component, inject, input } from '@angular/core';
import { AuthService } from './auth.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { environment } from './../../environments/environment';
import { ToastService } from '../services/toast.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  private authService = inject(AuthService);
  private storageService = inject(StorageService);
  authType = input.required<'login' | 'register'>();
  private router = inject(Router);
  private apiUrl = environment.apiUrl;
  private toastService = inject(ToastService);

  authForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(5)],
    }),
  });

  onSubmit() {
    if (this.authForm.invalid) return;
    const { email, password } = this.authForm.value;
    if (this.authForm.invalid) return;
    const action$ =
      this.authType() === 'register'
        ? this.authService.register(email!, password!)
        : this.authService.login(email!, password!);

    action$.subscribe({
      next: (res) => {
        if (res.credits) this.storageService.credits.set(res.credits);
        this.authForm.reset();
        this.router.navigate(['home']);
      },
      error: (err) => {
        this.authForm.controls['password'].reset();
      },
    });
  }

  loginWithGoogle() {
    window.location.href = this.apiUrl + 'auth/google';
  }
}

import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { computed } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css',
})
export class ForgetPasswordComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  message = signal<string | null>(null);
  userInput = '';

  queryParams = signal<{ [key: string]: string | null }>({});

  resetMode = computed(() => {
    const params = this.queryParams();
    return !!(params['token'] && params['email']);
  });

  constructor() {
    this.route.queryParamMap.subscribe((params) => {
      this.queryParams.set({
        token: params.get('token'),
        email: params.get('email'),
      });
    });
    console.log(this.queryParams());
  }

  onSubmit(form: any) {
    if (!this.resetMode()) {
      this.message.set(this.userInput);
      this.authService.forgotPassword(this.userInput).subscribe({
        next: (res) => {
          form.reset();
        },
        error: (err) => {},
      });
    } else if (this.resetMode()) {
      const { email, token } = this.queryParams();
      this.authService
        .resetPassword({
          password: this.userInput,
          email: email as string,
          token: token as string,
        })
        .subscribe({
          next: (res) => {
            console.log(res);
            form.reset();
            this.router.navigate(['/auth/login']);
          },
          error: (err) => {
            this.message.set('Error resetting password. Please try again.');
          },
        });
    }
  }
}

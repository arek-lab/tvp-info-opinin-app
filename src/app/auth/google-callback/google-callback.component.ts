import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google-callback',
  standalone: true,
  imports: [],
  templateUrl: './google-callback.component.html',
  styleUrl: './google-callback.component.css',
})
export class GoogleCallbackComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit() {
    this.authService.getCurrentUser().subscribe({
      next: () => this.router.navigate(['/home']),
      error: () => this.router.navigate(['/auth/login']),
    });
  }
}

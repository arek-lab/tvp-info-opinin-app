import { Component, inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-auth',
  standalone: true,
  imports: [],
  templateUrl: './home-auth.component.html',
  styleUrl: './home-auth.component.css',
})
export class HomeAuthComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  onLogout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['auth', 'login']);
      },
      error: (err) => {},
    });
  }
}

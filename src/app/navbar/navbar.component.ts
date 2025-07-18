import {
  Component,
  ElementRef,
  inject,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router, RouterLink } from '@angular/router';

declare const bootstrap: any;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements AfterViewInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;
  collapseInstance: any;
  user = this.authService.user;

  onLogout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['auth', 'login']);
      },
      error: (err) => {},
    });
  }

  ngAfterViewInit(): void {
    this.collapseInstance = new bootstrap.Collapse(
      this.navbarCollapse.nativeElement,
      {
        toggle: false,
      }
    );
  }

  closeNavbar() {
    this.collapseInstance?.hide();
  }
}

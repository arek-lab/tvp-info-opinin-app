import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeAuthComponent } from './home-auth/home-auth.component';
import { authGuard } from './auth/auth-guard';
import { HomeNonAuthComponent } from './home-non-auth/home-non-auth.component';
import { GoogleCallbackComponent } from './auth/google-callback/google-callback.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeNonAuthComponent,
  },
  {
    path: 'home',
    component: HomeAuthComponent,
    canActivate: [authGuard],
  },
  { path: 'auth/forgot-password', component: ForgetPasswordComponent },
  { path: 'auth/google/callback', component: GoogleCallbackComponent },
  { path: 'auth/:authType', component: AuthComponent },
];

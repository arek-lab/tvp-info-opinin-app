import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeAuthComponent } from './home-auth/home-auth.component';
import { authGuard } from './auth/auth-guard';
import { HomeNonAuthComponent } from './home-non-auth/home-non-auth.component';
import { GoogleCallbackComponent } from './auth/google-callback/google-callback.component';

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
  { path: 'auth/:authType', component: AuthComponent },
  { path: 'auth/google/callback', component: GoogleCallbackComponent },
];

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-non-auth',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-non-auth.component.html',
  styleUrl: './home-non-auth.component.css',
})
export class HomeNonAuthComponent {}

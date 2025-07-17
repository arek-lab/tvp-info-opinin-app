import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-home-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, MarkdownModule],
  templateUrl: './home-auth.component.html',
  styleUrl: './home-auth.component.css',
})
export class HomeAuthComponent {
  query: string = '';
  response: string = '';
  isLoading: boolean = false;
  error: string = '';
  private httpService = inject(HttpService);

  exampleQuestions: string[] = [
    'energia odnawialna',
    'Unia Europejska',
    'polityka gospodarcza',
    'emigracja Polaków',
    'sytuacja w Ukrainie',
  ];

  onSubmit(): void {
    if (!this.query.trim()) {
      this.error = 'Proszę wpisać pytanie';
      return;
    }

    this.isLoading = true;
    this.error = '';
    this.response = '';

    this.httpService.getOpinion(this.query).subscribe({
      next: (data) => {
        this.response = data.opinion;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Wystąpił błąd podczas wyszukiwania. Spróbuj ponownie.';
        this.isLoading = false;
        console.log('Error fetching opinion:', err);
      },
    });
  }

  setExampleQuery(example: string): void {
    this.query = example;
    this.error = '';
  }

  clearResponse(): void {
    this.response = '';
    this.error = '';
  }
}

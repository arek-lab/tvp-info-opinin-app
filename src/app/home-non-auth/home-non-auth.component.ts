import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-non-auth',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-non-auth.component.html',
  styleUrl: './home-non-auth.component.css',
})
export class HomeNonAuthComponent implements OnInit, OnDestroy {
  currentQuestion = '';
  private questionInterval: any;

  private questions = [
    '"Co TVP-Info uważa o wegańskiej kuchni?"',
    '"Jaki jest stosunek TVP-Info do kryptowalut?"',
    '"Co TVP-Info sądzi o pracy zdalnej?"',
    '"Jak TVP-Info pisze o młodym pokoleniu?"',
    '"Co TVP-Info myśli o miejskim transporcie?"',
    '"Jaki jest ton TVP-Info o sztucznej inteligencji?"',
    '"Co TVP-Info uważa o ekonomii współdzielenia?"',
  ];

  private currentQuestionIndex = 0;

  ngOnInit(): void {
    this.currentQuestion = this.questions[0];
    this.startQuestionRotation();
  }

  ngOnDestroy(): void {
    if (this.questionInterval) {
      clearInterval(this.questionInterval);
    }
  }

  private startQuestionRotation(): void {
    this.questionInterval = setInterval(() => {
      this.currentQuestionIndex =
        (this.currentQuestionIndex + 1) % this.questions.length;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    }, 3000);
  }
}

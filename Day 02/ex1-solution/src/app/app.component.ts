import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  wasAnswered: boolean = false;
  isCorrect: boolean | null = null;
  readonly question: string = 'How much is 6 * 7';
  readonly possibleAnswers: number[] = [20, 30, 40, 42];
  readonly correctAnswer = 42;

  selectAnswer(answer: number) {
    this.wasAnswered = true;
    this.isCorrect = (answer === this.correctAnswer);
  }

}

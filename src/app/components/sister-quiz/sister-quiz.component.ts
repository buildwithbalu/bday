import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ChapterNavComponent } from '../chapter-nav/chapter-nav.component';
import { EDITABLE_CONTENT, EditableQuizQuestion } from '../../data/editable-content';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-sister-quiz',
  standalone: true,
  imports: [CommonModule, RouterLink, ChapterNavComponent],
  templateUrl: './sister-quiz.component.html',
  styleUrl: './sister-quiz.component.scss'
})
export class SisterQuizComponent {
  readonly content = EDITABLE_CONTENT;
  readonly questions: EditableQuizQuestion[] = EDITABLE_CONTENT.quiz.questions;
  readonly currentQuestionIndex = signal<number>(0);
  readonly selectedAnswers = signal<{ [questionId: number]: { optionIdx: number; reaction: string } }>({});
  readonly isCompleted = signal<boolean>(false);
  readonly score = signal<number>(0);

  get currentQuestion(): EditableQuizQuestion {
    return this.questions[this.currentQuestionIndex()];
  }

  selectOption(optionIdx: number) {
    const q = this.currentQuestion;
    const option = q.options[optionIdx];

    const currentMap = { ...this.selectedAnswers() };
    currentMap[q.id] = {
      optionIdx,
      reaction: option.funnyReaction
    };
    this.selectedAnswers.set(currentMap);

    if (option.isLikki) {
      this.triggerMiniConfetti();
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex() < this.questions.length - 1) {
      this.currentQuestionIndex.update(idx => idx + 1);
    } else {
      this.finishQuiz();
    }
  }

  prevQuestion() {
    if (this.currentQuestionIndex() > 0) {
      this.currentQuestionIndex.update(idx => idx - 1);
    }
  }

  finishQuiz() {
    let likkiCount = 0;
    const answers = this.selectedAnswers();
    this.questions.forEach(q => {
      const ans = answers[q.id];
      if (ans !== undefined && q.options[ans.optionIdx]?.isLikki) {
        likkiCount++;
      }
    });

    this.score.set(likkiCount);
    this.isCompleted.set(true);

    this.triggerGrandConfetti();
  }

  resetQuiz() {
    this.selectedAnswers.set({});
    this.currentQuestionIndex.set(0);
    this.isCompleted.set(false);
  }

  private triggerMiniConfetti() {
    try {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.75 },
        colors: ['#ffd700', '#ff6b81', '#ffffff']
      });
    } catch (e) {}
  }

  private triggerGrandConfetti() {
    try {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#ffd700', '#ff6584', '#e2b755', '#ffffff']
      });
    } catch (e) {}
  }
}

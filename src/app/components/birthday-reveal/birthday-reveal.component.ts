import { Component, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterNavComponent } from '../chapter-nav/chapter-nav.component';
import { EDITABLE_CONTENT } from '../../data/editable-content';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-birthday-reveal',
  standalone: true,
  imports: [CommonModule, ChapterNavComponent],
  templateUrl: './birthday-reveal.component.html',
  styleUrl: './birthday-reveal.component.scss'
})
export class BirthdayRevealComponent implements OnDestroy {
  readonly content = EDITABLE_CONTENT;
  readonly reveal = EDITABLE_CONTENT.reveal;

  readonly currentStage = signal<number>(0);
  readonly isRevealing = signal<boolean>(false);

  private timeoutIds: any[] = [];
  private confettiInterval: any = null;

  startReveal() {
    this.isRevealing.set(true);
    this.currentStage.set(1);

    // Stage 1: "One last thing…" for 2.8 seconds
    const t1 = setTimeout(() => {
      this.currentStage.set(2);

      // Stage 2: "You were never just my friend." for 3.2 seconds
      const t2 = setTimeout(() => {
        this.currentStage.set(3);

        // Stage 3: "You are my Sister ❤️" for 3.4 seconds
        const t3 = setTimeout(() => {
          this.currentStage.set(4);
          this.launchContinuousCelebration();
        }, 3400);

        this.timeoutIds.push(t3);
      }, 3200);

      this.timeoutIds.push(t2);
    }, 2800);

    this.timeoutIds.push(t1);
  }

  restartReveal() {
    this.clearAllTimers();
    this.currentStage.set(0);
    this.isRevealing.set(false);
  }

  private launchContinuousCelebration() {
    try {
      confetti({
        particleCount: 150,
        spread: 120,
        origin: { y: 0.5 },
        colors: ['#ffd700', '#ff6b81', '#ffffff', '#e2b755', '#ff9bb2']
      });

      let count = 0;
      this.confettiInterval = setInterval(() => {
        if (count > 6) {
          clearInterval(this.confettiInterval);
          return;
        }
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 70,
          origin: { x: 0, y: 0.65 },
          colors: ['#ffd700', '#e2b755', '#fff']
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 70,
          origin: { x: 1, y: 0.65 },
          colors: ['#ff6b81', '#ff9bb2', '#ffd700']
        });
        count++;
      }, 1400);
    } catch (e) {}
  }

  private clearAllTimers() {
    this.timeoutIds.forEach(id => clearTimeout(id));
    this.timeoutIds = [];
    if (this.confettiInterval) {
      clearInterval(this.confettiInterval);
      this.confettiInterval = null;
    }
  }

  ngOnDestroy() {
    this.clearAllTimers();
  }
}

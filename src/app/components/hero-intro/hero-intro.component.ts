import { Component, ElementRef, ViewChild, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EDITABLE_CONTENT } from '../../data/editable-content';

@Component({
  selector: 'app-hero-intro',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero-intro.component.html',
  styleUrl: './hero-intro.component.scss'
})
export class HeroIntroComponent implements OnDestroy {
  readonly content = EDITABLE_CONTENT;

  @ViewChild('audioPlayer') audioRef?: ElementRef<HTMLAudioElement>;

  readonly isPlaying = signal<boolean>(false);
  readonly currentTime = signal<number>(0);
  readonly duration = signal<number>(0);
  readonly isMuted = signal<boolean>(false);
  readonly hasError = signal<boolean>(false);

  togglePlay(): void {
    const audio = this.audioRef?.nativeElement;
    if (!audio) return;

    if (this.isPlaying()) {
      audio.pause();
      this.isPlaying.set(false);
    } else {
      audio.play().then(() => {
        this.isPlaying.set(true);
        this.hasError.set(false);
      }).catch(err => {
        console.warn('Audio playback error (file might not be added yet):', err);
        this.hasError.set(true);
        this.isPlaying.set(false);
      });
    }
  }

  onTimeUpdate(): void {
    const audio = this.audioRef?.nativeElement;
    if (audio) {
      this.currentTime.set(audio.currentTime);
      if (audio.duration && !isNaN(audio.duration)) {
        this.duration.set(audio.duration);
      }
    }
  }

  onLoadedMetadata(): void {
    const audio = this.audioRef?.nativeElement;
    if (audio && audio.duration && !isNaN(audio.duration)) {
      this.duration.set(audio.duration);
      this.hasError.set(false);
    }
  }

  onAudioEnded(): void {
    this.isPlaying.set(false);
    this.currentTime.set(0);
  }

  onAudioError(): void {
    this.hasError.set(true);
    this.isPlaying.set(false);
  }

  seekAudio(event: Event): void {
    const audio = this.audioRef?.nativeElement;
    const input = event.target as HTMLInputElement;
    if (audio && input) {
      const seekTime = parseFloat(input.value);
      audio.currentTime = seekTime;
      this.currentTime.set(seekTime);
    }
  }

  toggleMute(): void {
    const audio = this.audioRef?.nativeElement;
    if (audio) {
      audio.muted = !audio.muted;
      this.isMuted.set(audio.muted);
    }
  }

  formatTime(seconds: number): string {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  ngOnDestroy(): void {
    if (this.audioRef?.nativeElement) {
      this.audioRef.nativeElement.pause();
    }
  }
}

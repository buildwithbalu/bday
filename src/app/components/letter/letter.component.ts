import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterNavComponent } from '../chapter-nav/chapter-nav.component';
import { EDITABLE_CONTENT } from '../../data/editable-content';

@Component({
  selector: 'app-letter',
  standalone: true,
  imports: [CommonModule, ChapterNavComponent],
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.scss'
})
export class LetterComponent {
  readonly content = EDITABLE_CONTENT;
  readonly letter = EDITABLE_CONTENT.letter;

  get sealInitial(): string {
    return this.content.profile.sisterName.charAt(0).toUpperCase() || 'L';
  }
}

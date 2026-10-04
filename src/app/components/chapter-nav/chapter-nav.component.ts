import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chapter-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './chapter-nav.component.html',
  styleUrl: './chapter-nav.component.scss'
})
export class ChapterNavComponent {
  @Input() prevRoute?: string;
  @Input() prevLabel?: string;
  @Input() nextRoute?: string;
  @Input() nextLabel?: string;
  @Input() chapterIndex?: string; // e.g. "Chapter 1 of 7"
}

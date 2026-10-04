import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterNavComponent } from '../chapter-nav/chapter-nav.component';
import { EDITABLE_CONTENT } from '../../data/editable-content';

@Component({
  selector: 'app-our-beginning',
  standalone: true,
  imports: [CommonModule, ChapterNavComponent],
  templateUrl: './our-beginning.component.html',
  styleUrl: './our-beginning.component.scss'
})
export class OurBeginningComponent {
  readonly content = EDITABLE_CONTENT;
}

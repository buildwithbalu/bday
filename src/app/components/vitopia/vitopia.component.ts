import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterNavComponent } from '../chapter-nav/chapter-nav.component';
import { LightboxService } from '../../services/lightbox.service';
import { EDITABLE_CONTENT, EditableMemoryImage } from '../../data/editable-content';

@Component({
  selector: 'app-vitopia',
  standalone: true,
  imports: [CommonModule, ChapterNavComponent],
  templateUrl: './vitopia.component.html',
  styleUrl: './vitopia.component.scss'
})
export class VitopiaComponent {
  readonly content = EDITABLE_CONTENT;
  readonly lightbox = inject(LightboxService);

  openImage(img: EditableMemoryImage) {
    this.lightbox.open({
      url: img.url,
      caption: img.caption,
      tag: 'VITOPIA College Fest Memory'
    });
  }
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterNavComponent } from '../chapter-nav/chapter-nav.component';
import { LightboxService } from '../../services/lightbox.service';
import { EDITABLE_CONTENT, EditableTimelineEvent, EditableMemoryImage } from '../../data/editable-content';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, ChapterNavComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  readonly content = EDITABLE_CONTENT;
  readonly lightbox = inject(LightboxService);

  isVideo(media: EditableMemoryImage): boolean {
    if (media.type === 'video') return true;
    const lower = (media.url || '').toLowerCase();
    return lower.endsWith('.mp4') || lower.endsWith('.webm') || lower.endsWith('.mov') || lower.endsWith('.mkv') || lower.endsWith('.ogg');
  }

  openMedia(media: EditableMemoryImage, event: EditableTimelineEvent) {
    this.lightbox.open({
      url: media.url,
      caption: media.caption,
      tag: `${event.date} • ${event.title}`,
      type: this.isVideo(media) ? 'video' : 'image'
    });
  }
}

import { Injectable, signal } from '@angular/core';

export interface LightboxMedia {
  url: string;
  caption?: string;
  tag?: string;
  type?: 'image' | 'video';
}

export type LightboxImage = LightboxMedia;

@Injectable({
  providedIn: 'root'
})
export class LightboxService {
  readonly isOpen = signal<boolean>(false);
  readonly currentMedia = signal<LightboxMedia | null>(null);

  get currentImage() {
    return this.currentMedia;
  }

  open(media: LightboxMedia) {
    if (!media.type) {
      const lower = (media.url || '').toLowerCase();
      if (lower.endsWith('.mp4') || lower.endsWith('.webm') || lower.endsWith('.mov') || lower.endsWith('.mkv') || lower.endsWith('.ogg')) {
        media.type = 'video';
      } else {
        media.type = 'image';
      }
    }
    this.currentMedia.set(media);
    this.isOpen.set(true);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  close() {
    this.isOpen.set(false);
    this.currentMedia.set(null);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
}

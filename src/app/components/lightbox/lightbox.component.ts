import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightboxService } from '../../services/lightbox.service';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.scss'
})
export class LightboxComponent {
  readonly lightbox = inject(LightboxService);

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.lightbox.isOpen()) {
      this.lightbox.close();
    }
  }

  close() {
    this.lightbox.close();
  }
}

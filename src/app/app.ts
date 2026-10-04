import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { StarsCanvasComponent } from './components/stars-canvas/stars-canvas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    StarsCanvasComponent,
    NavbarComponent,
    LightboxComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly title = 'To My Sister ❤️';
}

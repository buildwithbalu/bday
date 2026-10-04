import { Component, ElementRef, OnInit, OnDestroy, ViewChild, NgZone } from '@angular/core';

interface Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  baseAlpha: number;
  twinkleSpeed: number;
  vy: number;
  color: string;
}

@Component({
  selector: 'app-stars-canvas',
  standalone: true,
  templateUrl: './stars-canvas.component.html',
  styleUrl: './stars-canvas.component.scss'
})
export class StarsCanvasComponent implements OnInit, OnDestroy {
  @ViewChild('starCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D | null;
  private animationFrameId: number | null = null;
  private stars: Star[] = [];
  private resizeListener = () => this.handleResize();

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    if (typeof window !== 'undefined') {
      const canvas = this.canvasRef.nativeElement;
      this.ctx = canvas.getContext('2d');
      this.handleResize();
      this.initStars();

      // Run outside Angular zone to avoid triggering change detection on every frame
      this.ngZone.runOutsideAngular(() => {
        this.animate();
        window.addEventListener('resize', this.resizeListener);
      });
    }
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.resizeListener);
    }
  }

  private handleResize() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private initStars() {
    const count = Math.floor((window.innerWidth * window.innerHeight) / 9000);
    this.stars = [];
    const colors = ['#ffffff', '#ffd700', '#fbe3a1', '#ffe4b5', '#ff9bb2'];

    for (let i = 0; i < count; i++) {
      const baseAlpha = Math.random() * 0.7 + 0.2;
      this.stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 1.8 + 0.6,
        alpha: baseAlpha,
        baseAlpha: baseAlpha,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        vy: (Math.random() * 0.2 + 0.05) * -1, // gentle upward drift
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }

  private animate() {
    if (!this.ctx) return;
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const star of this.stars) {
      star.alpha += star.twinkleSpeed;
      if (star.alpha > 1 || star.alpha < 0.15) {
        star.twinkleSpeed = -star.twinkleSpeed;
      }

      star.y += star.vy;
      if (star.y < 0) {
        star.y = canvas.height;
        star.x = Math.random() * canvas.width;
      }

      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      this.ctx.fillStyle = star.color;
      this.ctx.globalAlpha = Math.max(0.1, Math.min(1, star.alpha));
      this.ctx.shadowBlur = star.size > 1.5 ? 8 : 0;
      this.ctx.shadowColor = star.color;
      this.ctx.fill();
    }

    this.ctx.globalAlpha = 1;
    this.ctx.shadowBlur = 0;
    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }
}

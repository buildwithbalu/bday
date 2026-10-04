import { Routes } from '@angular/router';
import { HeroIntroComponent } from './components/hero-intro/hero-intro.component';
import { OurBeginningComponent } from './components/our-beginning/our-beginning.component';
import { VitopiaComponent } from './components/vitopia/vitopia.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { SisterQuizComponent } from './components/sister-quiz/sister-quiz.component';
import { SecretRoomComponent } from './components/secret-room/secret-room.component';
import { LetterComponent } from './components/letter/letter.component';
import { BirthdayRevealComponent } from './components/birthday-reveal/birthday-reveal.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HeroIntroComponent, title: 'To My Sister ❤️ | Home' },
  { path: 'beginning', component: OurBeginningComponent, title: 'Chapter 1: Our Beginning | To My Sister ❤️' },
  { path: 'vitopia', component: VitopiaComponent, title: 'Chapter 2: VITOPIA | To My Sister ❤️' },
  { path: 'memories', component: TimelineComponent, title: 'Chapter 3: Memories | To My Sister ❤️' },
  { path: 'quiz', component: SisterQuizComponent, title: 'Chapter 4: Sister Quiz | To My Sister ❤️' },
  { path: 'secret-room', component: SecretRoomComponent, title: 'Chapter 5: Secret Room | To My Sister ❤️' },
  { path: 'letter', component: LetterComponent, title: 'Chapter 6: The Letter | To My Sister ❤️' },
  { path: 'reveal', component: BirthdayRevealComponent, title: 'The Birthday Reveal ✨ | To My Sister ❤️' },
  { path: '**', redirectTo: 'home' }
];

import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChapterNavComponent } from '../chapter-nav/chapter-nav.component';
import { LightboxService } from '../../services/lightbox.service';
import { FirebaseService } from '../../services/firebase.service';
import { EDITABLE_CONTENT, EditableSecretPhoto } from '../../data/editable-content';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-secret-room',
  standalone: true,
  imports: [CommonModule, FormsModule, ChapterNavComponent],
  templateUrl: './secret-room.component.html',
  styleUrl: './secret-room.component.scss'
})
export class SecretRoomComponent implements OnInit {
  readonly content = EDITABLE_CONTENT;
  readonly data = EDITABLE_CONTENT.secretRoom;
  readonly lightbox = inject(LightboxService);
  readonly fb = inject(FirebaseService);

  // Passcode entry state
  readonly enteredPassword = signal<string>('');
  readonly errorMessage = signal<string>('');
  readonly showHint = signal<boolean>(false);

  // Active Tab: 'video' | 'photos' | 'notes' | 'add'
  readonly activeTab = signal<'video' | 'photos' | 'notes' | 'add'>('video');

  // Notes state
  readonly isSavingNotes = signal<boolean>(false);
  readonly notesSuccess = signal<string>('');
  readonly notesError = signal<string>('');
  myNoteDraft = '';

  ngOnInit() {}

  async checkPassword() {
    const input = this.enteredPassword().trim().toLowerCase();
    const isMatch = this.data.allowedPasswords.some(
      p => p.toLowerCase() === input
    );

    if (isMatch) {
      // Determine default active profile based on entered passcode
      const isThambi = input.includes('thambi') || input.includes('balaji');
      const profile: 'Likki' | 'Thambi' = isThambi ? 'Thambi' : 'Likki';

      await this.fb.unlockWithPasscode(profile);
      this.errorMessage.set('');
      this.triggerConfetti();
      this.initNoteDraft();
    } else {
      this.errorMessage.set(this.data.incorrectPassMessage);
    }
  }

  toggleHint() {
    this.showHint.update(v => !v);
  }

  switchProfile(profile: 'Likki' | 'Thambi') {
    this.fb.activeProfile.set(profile);
    this.initNoteDraft();
  }

  lockRoom() {
    this.fb.lockVault();
    this.enteredPassword.set('');
    this.errorMessage.set('');
    this.activeTab.set('video');
  }

  triggerConfetti() {
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ffd700', '#dfb15b', '#ff6584']
      });
    } catch (e) {}
  }

  // Media Viewers
  openPhoto(photo: EditableSecretPhoto) {
    this.lightbox.open({
      url: photo.url,
      caption: photo.caption,
      tag: `Secret Vault • ${photo.tag || 'Memory'}`,
      type: photo.type || (photo.url.toLowerCase().endsWith('.mp4') ? 'video' : 'image')
    });
  }

  // Notes
  initNoteDraft() {
    const role = this.fb.activeProfile();
    const notes = this.fb.personalNotes();
    if (role === 'Likki') {
      this.myNoteDraft = notes?.likkiNote || '';
    } else {
      this.myNoteDraft = notes?.thambiNote || '';
    }
  }

  onTabChange(tab: 'video' | 'photos' | 'notes' | 'add') {
    this.activeTab.set(tab);
    if (tab === 'notes') {
      this.initNoteDraft();
    }
  }

  async saveMyNote() {
    this.notesError.set('');
    this.notesSuccess.set('');
    this.isSavingNotes.set(true);

    try {
      const role = this.fb.activeProfile();
      if (role === 'Likki') {
        await this.fb.savePersonalNotes({ likkiNote: this.myNoteDraft });
      } else {
        await this.fb.savePersonalNotes({ thambiNote: this.myNoteDraft });
      }
      this.notesSuccess.set('Note saved to vault successfully! ❤️');
      setTimeout(() => this.notesSuccess.set(''), 3500);
    } catch (err: any) {
      this.notesError.set(err.message || 'Failed to save note.');
    } finally {
      this.isSavingNotes.set(false);
    }
  }

}

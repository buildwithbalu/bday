import { Injectable, signal, computed, NgZone } from '@angular/core';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import {
  getAuth,
  signInAnonymously,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  Auth
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  serverTimestamp,
  onSnapshot,
  Firestore,
  Unsubscribe
} from 'firebase/firestore';

export interface PersonalNotes {
  thambiNote: string;
  thambiUpdatedAt?: any;
  likkiNote: string;
  likkiUpdatedAt?: any;
  updatedAt?: any;
  lastUpdatedBy?: string;
}

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAsmd7Gy0ta7rtoQH_vlCIiXwvv9ofP6hY",
  authDomain: "birthday-32c0d.firebaseapp.com",
  projectId: "birthday-32c0d",
  storageBucket: "birthday-32c0d.firebasestorage.app",
  messagingSenderId: "267987496901",
  appId: "1:267987496901:web:48cb40a4496a24162f65ac",
  measurementId: "G-871TZJT2SJ"
};

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app: FirebaseApp;
  private auth: Auth;
  private db: Firestore;

  // Passcode unlock & profile state
  readonly isPasscodeUnlocked = signal<boolean>(false);
  readonly activeProfile = signal<'Likki' | 'Thambi'>('Likki');

  // Firebase State Signals
  readonly currentUser = signal<User | null>(null);
  readonly authLoading = signal<boolean>(false);
  readonly personalNotes = signal<PersonalNotes | null>(null);

  // Active Role ('Likki' or 'Thambi')
  readonly userRole = computed<'Likki' | 'Thambi'>(() => {
    return this.activeProfile();
  });

  private unsubscribeNotes?: Unsubscribe;

  constructor(private ngZone: NgZone) {
    this.app = getApps().length === 0 ? initializeApp(FIREBASE_CONFIG) : getApp();
    this.auth = getAuth(this.app);
    this.db = getFirestore(this.app);

    onAuthStateChanged(this.auth, (user) => {
      this.ngZone.run(() => {
        this.currentUser.set(user);
        if (user) {
          this.listenToPersonalNotes();
        }
      });
    });
  }

  /**
   * Unlock vault using simple secret passcode.
   * Silently authenticates anonymously in the background so Firestore and Storage rules pass.
   */
  async unlockWithPasscode(profile: 'Likki' | 'Thambi' = 'Likki'): Promise<void> {
    this.activeProfile.set(profile);
    this.isPasscodeUnlocked.set(true);

    try {
      if (!this.currentUser()) {
        await signInAnonymously(this.auth);
      }
    } catch (err) {
      console.warn('Background anonymous auth note:', err);
    }

    // Start the Firestore listener used by the private notes.
    this.listenToPersonalNotes();
  }

  lockVault(): void {
    this.isPasscodeUnlocked.set(false);
  }

  private listenToPersonalNotes(): void {
    if (this.unsubscribeNotes) {
      this.unsubscribeNotes();
    }
    try {
      const noteRef = doc(this.db, 'personalNotes', 'shared');
      this.unsubscribeNotes = onSnapshot(
        noteRef,
        (docSnap) => {
          this.ngZone.run(() => {
            if (docSnap.exists()) {
              this.personalNotes.set(docSnap.data() as PersonalNotes);
            } else {
              this.personalNotes.set({
                thambiNote: 'Dear Likki, write your personal message here ❤️',
                likkiNote: 'Dear Thambi, write your personal message here 💛'
              });
            }
          });
        },
        (err) => {
          console.warn('Could not listen to personalNotes in Firestore:', err);
        }
      );
    } catch (e) {
      console.warn('Failed to attach personalNotes listener:', e);
    }
  }

  async savePersonalNotes(updates: Partial<PersonalNotes>): Promise<void> {
    const noteRef = doc(this.db, 'personalNotes', 'shared');
    const role = this.activeProfile();

    const dataToSave: any = {
      ...updates,
      updatedAt: serverTimestamp(),
      lastUpdatedBy: role
    };

    if (updates.thambiNote !== undefined) {
      dataToSave.thambiUpdatedAt = serverTimestamp();
    }
    if (updates.likkiNote !== undefined) {
      dataToSave.likkiUpdatedAt = serverTimestamp();
    }

    await setDoc(noteRef, dataToSave, { merge: true });
  }

  private cleanupListeners(): void {
    if (this.unsubscribeNotes) {
      this.unsubscribeNotes();
      this.unsubscribeNotes = undefined;
    }
  }
}

import { Injectable, signal, effect } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class General {

    showChatBox = signal(false);
 // Optional: Effect to log every time it changes (for debugging)
  constructor() {
    effect(() => {
      console.log('Signal changed:', this.showChatBox());
    });
  }

  
  // Toggle the state externally
  openChatBox() {
    this.showChatBox.set(true);
  }

    resetChatBox() {
    this.showChatBox.set(false);
  }

}

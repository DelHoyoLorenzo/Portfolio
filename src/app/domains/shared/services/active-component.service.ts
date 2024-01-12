import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveComponentService {
  about = signal(false)
  constructor() { }

  setAboutComponentActive(){
    this.about.set(true)
  }
}

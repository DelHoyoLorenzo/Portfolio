import { Component, ElementRef, HostListener, Renderer2, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatIconModule, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isBlurred = signal(false);

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    if (scrollPercentage > 10) {
      this.isBlurred.set(true);
    } else {
      this.isBlurred.set(false);
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';


import * as Aos from 'aos'

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isBlurred = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    let scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    if (scrollPercentage >= 10) {
      this.isBlurred = true;
    } 
    
    if(!document.documentElement.scrollTop){
      this.isBlurred = false;
    }
  }

  ngOnInit() {
    Aos.init()
  }

  descargarCV() {
    const rawUrl = 'https://raw.githubusercontent.com/DelHoyoLorenzo/Portfolio/main/src/assets/curriculum%20vitae/CV-EN%20Lorenzo%20Del%20Hoyo.pdf'; 
    const fileName = 'CV-Lorenzo Del Hoyo.pdf';
    
    const link = document.createElement('a');
    link.href = rawUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

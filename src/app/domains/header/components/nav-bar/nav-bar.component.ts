import { Component, ElementRef, HostListener, Renderer2, SimpleChanges, ViewChild, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

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

  @ViewChild('scroll') scroll!: ElementRef

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges){
    const size = changes['size']
    console.log('aca', size)
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    let scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  
    console.log('Scroll Percentage:', scrollPercentage);
  
    if (scrollPercentage >= 10) {
      this.isBlurred = true;
    } else if (scrollPercentage === 0) {
      console.log('entre');
      this.isBlurred = false;
    }
  
    console.log('isBlurred:', this.isBlurred);
  }
    
  /* loadHackers():void {
    this._service.getHackers().suscribe(res=>{
      this.hackers = res
    })
  }
 */
  ngOnInit() {
    Aos.init()
  }
}

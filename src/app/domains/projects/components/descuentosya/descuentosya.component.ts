import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-descuentosya',
  standalone: true,
  imports: [NgClass],
  templateUrl: './descuentosya.component.html',
  styleUrl: './descuentosya.component.css'
})
export class DescuentosyaComponent {
  ngOnInit(): void {
    initFlowbite();
  }

  rotateCard: any = { 
    cardOne: false, 
    cardTwo: false,
    cardThree: false
  };

  toggleRotate(selection: string) {
    this.rotateCard[selection] = !this.rotateCard[selection];
  }
}

import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-pokemon-app',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pokemon-app.component.html',
  styleUrl: './pokemon-app.component.css'
})
export class PokemonAppComponent {
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

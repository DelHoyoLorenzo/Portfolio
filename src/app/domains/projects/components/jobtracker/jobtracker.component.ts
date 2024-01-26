import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-jobtracker',
  standalone: true,
  imports: [NgClass],
  templateUrl: './jobtracker.component.html',
  styleUrl: './jobtracker.component.css'
})
export class JobtrackerComponent {
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

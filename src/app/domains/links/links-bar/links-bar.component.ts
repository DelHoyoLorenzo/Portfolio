import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-links-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './links-bar.component.html',
  styleUrl: './links-bar.component.css'
})
export class LinksBarComponent {
  isOver = false
  
  mouseOver(){
    this.isOver = true
  }

  mouseLeave(){
    this.isOver = false
  }
}

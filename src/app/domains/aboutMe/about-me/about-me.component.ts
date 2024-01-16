import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import * as Aos from 'aos'

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})

export class AboutMeComponent {
  ngOnInit() {
    Aos.init()
  }
}

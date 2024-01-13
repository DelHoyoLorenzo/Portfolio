import { Component, inject, signal } from '@angular/core';
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
  
}

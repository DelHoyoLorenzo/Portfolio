import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { RouterOutlet } from '@angular/router';
import { LinksBarComponent } from '../../../links/links-bar/links-bar.component';
import { NavBarComponent } from '../../../header/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../../footer/footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MatIconModule, RouterOutlet, LinksBarComponent, NavBarComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  
}

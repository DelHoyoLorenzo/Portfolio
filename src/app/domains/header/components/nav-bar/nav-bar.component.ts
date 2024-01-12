import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { ActiveComponentService } from '../../../shared/services/active-component.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  activeComponentService = inject(ActiveComponentService)
  about = signal(this.activeComponentService.about)
}

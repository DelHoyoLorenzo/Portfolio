import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { ActiveComponentService } from '../../shared/services/active-component.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})

export class AboutMeComponent {
  activeComponentService = inject(ActiveComponentService)

  ngAfterViewInit() {
    this.activeComponentService.setAboutComponentActive()
  }


}

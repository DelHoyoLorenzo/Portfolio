import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-jobtracker',
  standalone: true,
  imports: [],
  templateUrl: './jobtracker.component.html',
  styleUrl: './jobtracker.component.css'
})
export class JobtrackerComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}

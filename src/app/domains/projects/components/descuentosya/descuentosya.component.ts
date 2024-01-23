import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-descuentosya',
  standalone: true,
  imports: [],
  templateUrl: './descuentosya.component.html',
  styleUrl: './descuentosya.component.css'
})
export class DescuentosyaComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}

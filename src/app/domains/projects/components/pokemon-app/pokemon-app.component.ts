import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-pokemon-app',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-app.component.html',
  styleUrl: './pokemon-app.component.css'
})
export class PokemonAppComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}

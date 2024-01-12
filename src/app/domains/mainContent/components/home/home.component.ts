import { Component } from '@angular/core';
import { NavBarComponent } from '../../../header/components/nav-bar/nav-bar.component';
import { AboutMeComponent } from '../../../aboutMe/about-me/about-me.component';
import { LinksBarComponent } from '../../../links/links-bar/links-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, AboutMeComponent, LinksBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

import { Component, SimpleChange, SimpleChanges, inject, signal } from '@angular/core';
import { ProjectsService } from '../../../shared/services/projects.service';
import { PokemonAppComponent } from '../../components/pokemon-app/pokemon-app.component';
import { JobtrackerComponent } from '../../components/jobtracker/jobtracker.component';
import { DescuentosyaComponent } from '../../components/descuentosya/descuentosya.component';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgClass, PokemonAppComponent, DescuentosyaComponent, JobtrackerComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  private projectService = inject(ProjectsService)

  projectOpened= signal( this.projectService.projectOpened )
  
  changeProjectOpened ( projectNumber: number ){
    this.projectOpened.set(projectNumber)
    this.projectService.projectOpened = projectNumber
  }
}

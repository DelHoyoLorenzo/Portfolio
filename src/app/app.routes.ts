import { Routes } from '@angular/router';
import { AboutMeComponent } from './domains/aboutMe/about-me/about-me.component';
import { ErrorComponent } from './domains/error/error/error.component';
import { LayoutComponent } from './domains/shared/components/layout/layout.component';
import { ProjectsComponent } from './domains/projects/pages/projects/projects.component';
import { ContactComponent } from './domains/contact/pages/contact/contact.component';

export const routes: Routes = [
    {
        path:'',
        component: LayoutComponent,
        children:[
            {
                path:'',
                component: AboutMeComponent
            },
            {
                path:'projects',
                component: ProjectsComponent
            },
            {
                path:'contact',
                component: ContactComponent
            },

        ]
    },
    {
        path:'**',
        component: ErrorComponent
    }
];

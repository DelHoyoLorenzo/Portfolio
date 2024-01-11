import { Routes } from '@angular/router';
import { HomeComponent } from './domains/mainContent/components/home/home.component';
import { ErrorComponent } from './domains/error/error/error.component';
export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'**',
        component: ErrorComponent
    }
];

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RacesComponent } from './races/races.component';
import { RegisterComponent } from './register/register.component';

export const ROUTES: Routes = [

    {path: '', component: HomeComponent},
    {path: 'races', component: RacesComponent, pathMatch: 'full'},
    {path: 'register', component: RegisterComponent, pathMatch: 'full'},
    {path: 'login', component: LoginComponent, pathMatch: 'full'}
];
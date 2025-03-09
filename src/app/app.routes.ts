import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { AddschoolComponent } from './pages/addschool/addschool.component';
import { ListschoolComponent } from './pages/listschool/listschool.component';
import { AddexcursionComponent } from './pages/addexcursion/addexcursion.component';
import { ListexcursionComponent } from './pages/listexcursion/listexcursion.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'adicionar-escola', component: AddschoolComponent },
    { path: 'lista-escolas', component: ListschoolComponent},
    { path: 'criar-agendamento', component: AddschoolComponent },
    { path: 'adicionar-link', component: AddexcursionComponent },
    { path: 'lista-excursoes', component: ListexcursionComponent }
];

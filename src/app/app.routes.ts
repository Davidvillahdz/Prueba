import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { DetailPage } from './pages/detail-page/detail-page';
import { LoginPage } from './pages/login-page/login-page';

export const routes: Routes = [
    { path: 'login', component: LoginPage},
    { path: 'home', component: HomePage },
    { path: 'detail', component: DetailPage },
];


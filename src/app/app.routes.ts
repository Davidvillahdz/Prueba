// app.routes.ts
import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { HomePage } from './pages/home-page/home-page';
import { PokemonDetailPageComponent } from './pages/detail-page/detail-page';

export const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'home', component: HomePage },
  { path: 'pokemon/:id', component: PokemonDetailPageComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
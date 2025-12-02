import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPage } from "./pages/login-page/login-page";
import { HomePage } from "./pages/home-page/home-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginPage, HomePage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Prueba');
}

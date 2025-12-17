import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer'; 
// FIX 1: Change 'Header' to 'HeaderComponent'
import { HeaderComponent } from './components/header/header'; 

@Component({
  selector: 'app-root',
  // FIX 2: Add 'HeaderComponent' to the imports list
  imports: [RouterOutlet, Footer, HeaderComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('new-project-Madrasa');
}
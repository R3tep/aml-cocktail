import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RandomCocktailComponent } from './pages/cocktail/components/random-cocktail/random-cocktail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RandomCocktailComponent],
})
export class AppComponent {}

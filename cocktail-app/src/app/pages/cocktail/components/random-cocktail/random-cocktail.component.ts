import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromCocktail from '../../../../store/cocktail/cocktail.selectors';
import * as CocktailActions from '../../../../store/cocktail/cocktail.actions';
import { Cocktail } from '../../../../interfaces';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DescriptionComponent } from '../description/description.component';
import { MatDialog } from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-random-cocktail',
  templateUrl: './random-cocktail.component.html',
  styleUrls: ['./random-cocktail.component.scss'],
  standalone: true,
  imports: [DescriptionComponent, AsyncPipe, CommonModule, MatButtonModule, MatCardModule],
})
export class RandomCocktailComponent implements OnInit {
  cocktail$: Observable<Cocktail>;
  error$: Observable<Error>;

  constructor(private store: Store, public dialog: MatDialog) {
    this.cocktail$ = this.store.select(fromCocktail.selectCocktail);
    this.error$ = this.store.select(fromCocktail.selectCocktailError);
  }

  ngOnInit(): void {
    this.getRandomCocktail();
  }

  getRandomCocktail(): void {
    this.store.dispatch(CocktailActions.loadRandomCocktail());
  }

  openRecipe(): void {
    this.dialog.open(DescriptionComponent, {
      data: { cocktail$: this.cocktail$ }
    })
  }
}

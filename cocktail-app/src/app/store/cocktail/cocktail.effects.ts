import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CocktailService } from '../../services/cocktail.service';
import * as CocktailActions from './cocktail.actions';

@Injectable()
export class CocktailEffects {

  loadRandomCocktail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CocktailActions.loadRandomCocktail),
      mergeMap(() =>
        this.cocktailService.getRandomCocktail().pipe(
          map((cocktail) => CocktailActions.loadRandomCocktailSuccess({ cocktail: cocktail.drinks[0] })),
          catchError((error) => of(CocktailActions.loadRandomCocktailFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private cocktailService: CocktailService) {}
}

import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCocktail from './cocktail.reducer';


export const selectCocktailState = (state: fromCocktail.State) => state[fromCocktail.cocktailFeatureKey];

export const selectCocktail = createSelector(
  selectCocktailState,
  (state: fromCocktail.State) => state.cocktail
);

export const selectCocktailError = createSelector(
  selectCocktailState,
  (state: fromCocktail.State) => state.error
);

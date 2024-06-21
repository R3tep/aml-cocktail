import { createAction, props } from '@ngrx/store';
import { Cocktail } from '../../interfaces';

export const loadRandomCocktail = createAction('[Cocktail] Load Random Cocktail');
export const loadRandomCocktailSuccess = createAction(
  '[Cocktail] Load Random Cocktail Success',
  props<{ cocktail: Cocktail }>()
);
export const loadRandomCocktailFailure = createAction(
  '[Cocktail] Load Random Cocktail Failure',
  props<{ error: Error }>()
);

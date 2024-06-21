import { createReducer, on } from '@ngrx/store';
import * as CocktailActions from './cocktail.actions';
import { Cocktail } from '../../interfaces';

export const cocktailFeatureKey = 'cocktails';

export interface State {
  isLoading: boolean;
  cocktail: Cocktail;
  error: Error;
}

export const initialState: State = {
  isLoading: false,
  cocktail: null,
  error: null,
};

export const reducers = createReducer(
  initialState,
  on(CocktailActions.loadRandomCocktailSuccess, (state, { cocktail }) => ({
    ...state,
    cocktail,
    error: null,
  })),
  on(CocktailActions.loadRandomCocktailFailure, (state, { error }) => ({
    ...state,
    cocktail: null,
    error,
  }))
);

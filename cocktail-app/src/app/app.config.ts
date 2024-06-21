import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { reducers, CocktailEffects } from "./store/cocktail";
import { provideHttpClient } from '@angular/common/http';

//inside the provideStore give the state and reducers - no need for ngModule
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideHttpClient(), 
    provideClientHydration(), 
    provideStore({cocktails: reducers}), 
    provideEffects(CocktailEffects), 
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};

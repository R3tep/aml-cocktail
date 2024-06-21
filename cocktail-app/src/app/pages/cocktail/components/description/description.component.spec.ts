import { MockBuilder } from 'ng-mocks'
import { createComponentFactory, Spectator } from '@ngneat/spectator'

import { DescriptionComponent } from './description.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';
import { Cocktail } from '../../../../interfaces';

describe('DescriptionComponent', () => {
  let spectator: Spectator<DescriptionComponent>

  const dependencies = MockBuilder(DescriptionComponent)
  .mock(MatDialogRef, { close: jest.fn() }, { export: true })
  .mock(MAT_DIALOG_DATA, { cocktail$: of({ strIngredient: ['Vodka', 'Citron'], strMeasure: ['1 oz', ''],  instructions: 'A boire très frais' } ) }, { export: true })
  .build()

const createComponent = createComponentFactory({
  component: DescriptionComponent,
  shallow: true,
  ...dependencies,
})


  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should get ingredients correctly', () => {
    const dummyCocktail = {
      strIngredient1: 'Tequila',
      strIngredient2: 'Triple sec',
      strIngredient3: 'Lime juice',
      strMeasure1: '1 1/2 oz',
      strMeasure2: '1/2 oz',
      strMeasure3: '1 oz',
    };
    const ingredients = spectator.component.getIngredients(dummyCocktail as Cocktail);
    expect(ingredients).toEqual(['1 1/2 oz Tequila', '1/2 oz Triple sec', '1 oz Lime juice']);
  });

});


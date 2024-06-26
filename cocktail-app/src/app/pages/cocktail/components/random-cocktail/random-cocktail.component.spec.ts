import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store, StoreModule } from '@ngrx/store';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { RandomCocktailComponent } from './random-cocktail.component';

import * as fromCocktail from '../../../../store/cocktail/cocktail.reducer';
import * as CocktailActions from '../../../../store/cocktail/cocktail.actions';
import { CocktailService } from '../../../../services/cocktail.service';

describe('RandomCocktailComponent', () => {
  let component: RandomCocktailComponent;
  let fixture: ComponentFixture<RandomCocktailComponent>;
  let store: Store<fromCocktail.State>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({ [fromCocktail.cocktailFeatureKey]: fromCocktail.reducers }),
        MatButtonModule,
        MatCardModule
      ],
      providers: [CocktailService]
    }).compileComponents();

    store = TestBed.inject(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadRandomCocktail action on init', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalledWith(CocktailActions.loadRandomCocktail());
  });
});

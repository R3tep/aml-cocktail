import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CocktailService } from './cocktail.service';

describe('CocktailService', () => {
  let service: CocktailService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CocktailService],
    });
    service = TestBed.inject(CocktailService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch a random cocktail', () => {
    const dummyCocktail = {
      drinks: [{
        strDrink: 'Margarita',
        strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
        strInstructions: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and not mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.',
        strIngredient1: 'Tequila',
        strIngredient2: 'Triple sec',
        strIngredient3: 'Lime juice',
        strMeasure1: '1 1/2 oz',
        strMeasure2: '1/2 oz',
        strMeasure3: '1 oz',
      }]
    };

    let result

    service.getRandomCocktail().subscribe(cocktail => {
      result = cocktail; // Stocke la valeur du cocktail dans result
    });

    const req = httpMock.expectOne(`${service['apiUrl']}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCocktail);

    expect(result.drinks.length).toBe(1);
    expect(result.drinks[0].strDrink).toBe('Margarita');
  });
});

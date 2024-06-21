import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cocktail } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

  constructor(private http: HttpClient) {}

  getRandomCocktail(): Observable<{ drinks: Cocktail[] }> {
    return this.http.get<{ drinks: Cocktail[] }>(this.apiUrl);
  }
}

import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogClose} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Cocktail } from '../../../../interfaces';
import { AsyncPipe, CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
  standalone: true,
  imports: [AsyncPipe, CommonModule, MatIconModule, MatDialogClose],
})
export class DescriptionComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { cocktail$: Observable<Cocktail> }) { }

  getIngredients(cocktail: Cocktail): string[] {
    let ingredients: string[] = [];
    if (cocktail) {
      for (let i = 1; i <= 15; i++) {
        let ingredient = cocktail[`strIngredient${i}`];
        let measure = cocktail[`strMeasure${i}`];
        if (ingredient) {
          ingredients.push(`${measure ? measure : ''} ${ingredient}`);
        }
      }
    }
    return ingredients;
  }
}

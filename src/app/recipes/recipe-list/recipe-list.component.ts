import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://images.contentful.com/uexfe9h31g3m/6cXUnG9vTasyUoCQAiIUAc/94619f709' +
      'dd48dc4dddcc03774bb7f55/Kebabish_Style_Nuggets_Recipe_Web__2_.jpg'),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://images.contentful.com/uexfe9h31g3m/6cXUnG9vTasyUoCQAiIUAc/94619f709' +
      'dd48dc4dddcc03774bb7f55/Kebabish_Style_Nuggets_Recipe_Web__2_.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}

// import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.mode';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 20),
    new Ingredient('tomato', 10),
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }
}

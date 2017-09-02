import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("spaghetti", "italian yum yum", "https://static01.nyt.com/images/2015/07/27/dining/27SPAGHETTI/27SPAGHETTI-superJumbo.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}

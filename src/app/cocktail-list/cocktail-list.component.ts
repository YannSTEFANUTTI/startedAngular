import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../models/cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  cocktailList!: Cocktail[];

  constructor(public CocktailService: CocktailService) { }
  ngOnInit(): void {

    this.cocktailList = this.CocktailService.getCocktails();

  }

}

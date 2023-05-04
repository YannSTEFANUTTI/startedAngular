import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { CocktailTwoService } from '.././shared/cocktail-two.service';

@Component({
  selector: 'app-cocktail-list02',
  templateUrl: './cocktail-list02.component.html',
  styleUrls: ['./cocktail-list02.component.css']
})
export class CocktailList02Component implements OnInit {

  cocktailList!: Cocktail[];

  constructor(public CocktailTwoService: CocktailTwoService) { }

  ngOnInit(): void {
    this.CocktailTwoService.getCocktails().subscribe(cocktailsFromJsonFile => {
      this.cocktailList = cocktailsFromJsonFile;
    });
  }
}

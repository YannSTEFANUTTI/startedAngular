import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  cocktailsList: Cocktail[] = [{
    name: 'Mojito',
    price: 6.50,
    picture: 'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/cocktail-mojito-2.jpg'
  },
  {
    name: 'Cosmopolitan',
    price: 8.00,
    picture: 'https://www.oceanspray.fr/-/media/OS/US/DotCom/recipes/France/Cocktails/Cosmopolitan_MobileDETAIL.ashx'
  },
  {
    name: 'Piña colada',
    price: 7.50,
    picture: 'https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2023/03/80258_origin-scaled-320x410.jpg'
  },
  {
    name: 'Margarita',
    price: 7.00,
    picture: 'https://www.destinationcocktails.fr/wp-content/uploads/recipes/286_margaritafrozen.jpg'
  }]

  getCocktails(): Cocktail[] {
    return this.cocktailsList;
  }
}

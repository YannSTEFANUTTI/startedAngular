import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../shared/pokemon.service';

@Component({
  selector: 'app-pokemon',
  template: `
    <h2>Les 3 premiers pokémons</h2>
    <ul>
      <li *ngFor="let pokemon of pokemons">{{ pokemon.name }}</li>
    </ul>
  `
})
export class PokemonComponent implements OnInit {
  pokemons: any= [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getFirstThreePokemons().subscribe(threePokemon => {
      this.pokemons = threePokemon.results;
    });
  }
}

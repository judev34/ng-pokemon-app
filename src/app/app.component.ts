import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit {
  title = 'ng-pokemon-app';

  pokemonList: Pokemon[] = POKEMONS;

  pokemonSelected: Pokemon|undefined;

  ngOnInit(): void {
    console.log(this.pokemonList);
  }

  selectPokemon(pokemonId: string ) {
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id === +pokemonId);
    if (pokemon) {
      console.log(`Vous avez selectionné le pokémon ${pokemon.name} !`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Vous avez selectionné un fake pokémon !`);
      this.pokemonSelected = pokemon;
    } 
  }

}

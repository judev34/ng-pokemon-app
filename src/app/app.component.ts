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

  /**
   * We're looking for a pokemon in the pokemonList array that has an id property that matches the
   * pokemonId parameter. If we find one, we assign it to the pokemonSelected property. If we don't
   * find one, we assign undefined to the pokemonSelected property
   * @param {string} pokemonId - string
   */
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

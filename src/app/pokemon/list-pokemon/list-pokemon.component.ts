import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent{

  pokemonList!: Pokemon[];

  constructor(
    private router: Router, 
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokemonList = this.pokemonService.getPokemons();
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemons', pokemon.id]);
  }

}

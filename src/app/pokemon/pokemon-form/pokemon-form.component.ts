import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon!: Pokemon;
  pokemonTypes!: string[];

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) {}

  ngOnInit() {
    // pokemonTypeList
    this.pokemonTypes = this.pokemonService.getPokemonTypeList();

  }

  hasType(pokemonType: string): boolean { // verifier si il a type
    return this.pokemon.types.includes(pokemonType);
  }

  selectType($event: Event, type: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    if (isChecked) { // ajouter ou retirer des types de pokemon en cochant et ddecochant des cases
      this.pokemon.types.push(type);
    } else {
      // this.pokemon.types = this.pokemon.types.filter(t => t !== type);
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  isTypesValid(type: string): boolean {

    if(this.pokemon.types.length == 1 && this.hasType(type)){
      return false;
    }

    if(this.pokemon.types.length > 2 && !this.hasType(type)){
      return false;
    }
    return true;
  }

  onSubmit(){
    this.router.navigate(['/pokemons', this.pokemon.id]); // redirection vers la page du pokemon
  }
}

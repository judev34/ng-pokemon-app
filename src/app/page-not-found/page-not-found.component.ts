import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class='container'>
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
      <h1>Hey, cette page n'existe pas !</h1>
      <a routerLink="/pokemons" class="back-button">
        Retourner à l' accueil
      </a>
    </div>
  `,
  styles: [
    `
    .container {
      text-align: center;
    }
    .back-button {
      text-decoration: none;
      color: black;
      font-size: 1.2em;
    }
    `
  ]
})
export class PageNotFoundComponent {}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: string): string {
  
    let color: string;
  
    switch (type) {
      case 'Feu':
        color = 'lightcoral';
        break;
      case 'Eau':
        color = 'lightskyblue';
        break;
      case 'Plante':
        color = 'lightgreen';
        break;
      case 'Insecte':
        color = 'peru';
        break;
      case 'Normal':
        color = 'lightgrey';
        break;
      case 'Vol':
        color = 'lightblue';
        break;
      case 'Poison':
        color = '	plum';
        break;
      case 'Fée':
        color = 'pink';
        break;
      case 'Psy':
        color = 'violet';
        break;
      case 'Electrik':
        color = 'yellow';
        break;
      case 'Combat':
        color = 'orange';
        break;
      default:
        color = '	silver';
        break;
    }
  
    return color;
  
  }

}

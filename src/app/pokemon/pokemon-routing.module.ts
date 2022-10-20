import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';

const routes: Routes = [
    { path: 'edit/pokemon/:id', component: EditPokemonComponent },
    { path: '', component: ListPokemonComponent },
    { path: ':id', component: DetailPokemonComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PokemonRoutingModule {}
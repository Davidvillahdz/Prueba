import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { Observable, of } from 'rxjs';
import { PokemonService } from '../../Pokemon/PokemonService';


export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  sprites: { front_default: string };
  types: Array<{ slot: number; type: { name: string; url: string } }>;
  stats: Array<{ base_stat: number; stat: { name: string } }>;
  abilities: Array<{ is_hidden: boolean; ability: { name: string } }>;
  moves: Array<any>;
}

@Component({
  selector: 'app-pokemon-detail-page', 
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detail-page.html',
})
export class PokemonDetailPageComponent {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private pokemonService = inject(PokemonService);

  detallePokemon = rxResource({
    params: () => ({
      id: this.route.snapshot.paramMap.get('id')
    }),
    stream: ({ params }): Observable<PokemonDetail | undefined> => {
      const id = params.id;
      if (!id) return of(undefined);
      return this.pokemonService.getPokemonById(id) as Observable<PokemonDetail>;
    }
  });

  goBack() {
    this.router.navigate(['/home']);
  }
}
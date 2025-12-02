import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Router, RouterModule } from '@angular/router';
import { PokemonService } from '../../Pokemon/PokemonService';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'],
})
export class HomePage {
  private pokemonService = inject(PokemonService);
  private router = inject(Router);

  offset = signal(20);
  limit = signal(20);


  dataResource = rxResource({
    params: () => ({
      offset: this.offset(),
      limit: this.limit(),
    }),
    stream: ({ params }) => {
      return this.pokemonService.getPokemons(
        params.offset,
        params.limit
      );
    },
  });

  goToDetail(url: string) {
    const id = url.split('/').filter(Boolean).pop();
    this.router.navigate(['/pokemon', id]);
  }

  nextPage() {
    this.offset.update(v => v + 20);
  }

  prevPage() {
    this.offset.update(v => (v > 0 ? v - 20 : 0));
  }
}

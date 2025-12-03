import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService } from '../../Pokemon/PokemonService';


// 1. DEFINIMOS LA INTERFAZ (El mapa de los datos para que el HTML no falle)
interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-page.html', // Asegúrate que el nombre del archivo coincida
})
export class HomePage { // Nombre corregido a HomePageComponent
  
  private pokemonService = inject(PokemonService);
  private router = inject(Router);

  offset = signal(0);
  limit = signal(20);

  dataResource = rxResource({
    params: () => ({
      offset: this.offset(),
      limit: this.limit(),
    }),
    stream: ({ params }): Observable<PokemonListResponse> => { // <--- Tipamos el retorno
      // 2. CASTING: "as Observable<...>" arregla el error del HTML
      return this.pokemonService.getPokemons(params.offset, params.limit) as Observable<PokemonListResponse>;
    },
  });

  goToDetail(url: string) {
    const parts = url.split('/');
    const id = parts[parts.length - 2];
    this.router.navigate(['/pokemon', id]);
  }

  nextPage() {
    this.offset.update(v => v + 20);
  }

  prevPage() {
    this.offset.update(v => Math.max(0, v - 20));
  }
}
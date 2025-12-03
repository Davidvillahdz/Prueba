// pokemon.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private http = inject(HttpClient);
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  getPokemons(offset: number, limit: number) {

    return this.http.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
  }

  getPokemonById(id: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}

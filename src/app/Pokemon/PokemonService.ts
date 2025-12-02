// pokemon.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private http = inject(HttpClient);
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  getPokemons(offset: number, limit: number) {
    // ✔ DEVUELVE OBSERVABLE, NO PROMISE
    return this.http.get<any>(`${this.baseUrl}?offset=${offset}&limit=${limit}`);
  }

  getPokemonDetail(id: number) {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
}

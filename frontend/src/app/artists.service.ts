import { Injectable } from '@angular/core';
import { Artist } from './artists/artist';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  getArtists(): Observable<Artist[]> {
    const artists = of ([
      {artist_id: 1, name: 'AC/DC'},
      {artist_id: 2, name: 'Aerosmith'},
      {artist_id: 3, name: 'Drake'}
    ])
    return artists;
  }

  constructor() { }
}

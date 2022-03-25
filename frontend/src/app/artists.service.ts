import { Injectable } from '@angular/core';
import { Artist } from './artists/artist';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>('http://localhost:8081/artists')
  }

  postArtist(artist: Artist) {
    return this.http.post('http://localhost:8081/artists', artist);
  }

  constructor(private http: HttpClient) { }
}

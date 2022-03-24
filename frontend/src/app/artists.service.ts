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

  constructor(private http: HttpClient) { }
}

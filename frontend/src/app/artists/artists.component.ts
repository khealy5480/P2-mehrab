import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../artists.service';
import { Artist } from './artist';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  artist: Artist = {
    artist_id: 1,
    name: 'AC/DC'
  }

  artists: Artist[] = []

  getArtists(): void {
    this.artistService.getArtists()
      .subscribe(artists => this.artists = artists)
  }

  constructor(private artistService: ArtistsService) { }

  ngOnInit(): void {
    this.getArtists();
  }

}

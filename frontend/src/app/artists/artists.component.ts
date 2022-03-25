import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
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

  userForm = this.formBuilder.group({
    name: new FormControl('', Validators.required)
  });

  getArtists(): void {
    this.artistService.getArtists()
      .subscribe(artists => this.artists = artists)
  }

  onSubmit() {
    this.artistService.postArtist(this.userForm.value).subscribe(data => console.log(data));
    this.userForm.reset();
    this.getArtists();
  }

  constructor(private artistService: ArtistsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getArtists();
  }

}

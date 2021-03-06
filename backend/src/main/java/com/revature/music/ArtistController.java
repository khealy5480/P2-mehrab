package com.revature.music;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ArtistController {
    private ArtistRepository artistRepository;

    public ArtistController(ArtistRepository artistRepository) {
        this.artistRepository = artistRepository;
    }

    @GetMapping("/artists")
    public Iterable<Artist> getArtists() {
        return artistRepository.findAll();
    }

    @PostMapping("/artists")
    public Artist postArtist(@RequestBody Artist artist) {
        return artistRepository.save(artist);
    }

    @GetMapping("/artists/{id}")
    public Artist getArtist(@PathVariable("id") int id) {
        return artistRepository.findById(id);
    }
}

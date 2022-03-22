package com.revature.music;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AlbumController {
    private AlbumRepository albumRepository;

    public AlbumController(AlbumRepository albumRepository) {
        this.albumRepository = albumRepository;
    }

    @GetMapping("/albums")
    public Iterable<Album> getAll(){
        return albumRepository.findAll();
    }

    @PostMapping("/albums")
    public Album post(@RequestBody Album album) {
        return albumRepository.save(album);
    }
}

package com.revature.music;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface ArtistRepository extends CrudRepository<Artist, Integer> {
    Artist findById(int id);    
}

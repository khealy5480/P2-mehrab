package com.revature.music;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class ApiController {
    @Autowired
    private RestTemplate restTemplate;

    @GetMapping("/api")
    public Artist api() {
        return restTemplate.getForObject("http://localhost:8081/artists/1", Artist.class);
    }
}

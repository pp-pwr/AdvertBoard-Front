package com.ztwpp.AdvertBoard.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class TestController {
    
    @GetMapping("/hello")
    public String hello() {
        return "Hello" + new Date() + "\n";
    }
}
package com.tfc.webGazer.service;

import org.springframework.stereotype.Service;


@Service
public class WebGazerService {
    public String getIndex(){
        return "index";
    }
    public String sayHello(){
        return "hello world";
    }

    public String hello(){
        return "hello";
    }
    
    public String demo(){
        return "demo";
    }
}

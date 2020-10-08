package com.tfc.webGazer.service;

import org.springframework.stereotype.Service;

import java.util.HashMap;

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
}

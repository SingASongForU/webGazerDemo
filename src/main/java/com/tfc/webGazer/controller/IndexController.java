package com.tfc.webGazer.controller;

import com.tfc.webGazer.service.WebGazerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class IndexController {

    private final WebGazerService webGazerService;

    @Autowired
    public IndexController(WebGazerService webGazerService) {
        this.webGazerService = webGazerService;
    }

    @RequestMapping("/sayHello")
    @ResponseBody
    public String sayHello(){
        String result=webGazerService.sayHello();
        return result;
    }
    
    @RequestMapping("/demo")
    public String demo(){
        String result=webGazerService.demo();
        return result;
    }

    @RequestMapping("/hello")
    public String hello(){
        String result=webGazerService.hello();
        return result;
    }

    @RequestMapping("/index")
    public String getIndex(){
        String result=webGazerService.getIndex();
        return result;
    }

    /**
     * demo
     * @return
     */
    @RequestMapping("/gazer")
    public String getGazer(){
        String result=webGazerService.gazer();
        return result;
    }

}

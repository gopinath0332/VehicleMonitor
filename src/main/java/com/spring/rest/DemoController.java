package com.spring.rest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/api")
public class DemoController {
    @RequestMapping(value = "/test", method = RequestMethod.GET)
    @ResponseBody
    public String getDummy(ModelMap map) {
        return "Rest Controller is working!!!!";
    }
}

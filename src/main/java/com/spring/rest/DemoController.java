package com.spring.rest;

import com.sun.deploy.net.HttpRequest;
import com.sun.deploy.net.HttpResponse;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/api")
public class DemoController {
    @RequestMapping(value = "/test", method = RequestMethod.GET)
    @ResponseBody
    public String getDummy(ModelMap map) {
        return "Rest Controller is working!!!!";
    }
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseBody
    public String Login (Model model, HttpServletRequest request){
//        model.addAttribute("isAuthenticated",true);
        HttpSession session = request.getSession(false);
        session.setAttribute("isAuthenticated",true);
        return "success";
    }
}

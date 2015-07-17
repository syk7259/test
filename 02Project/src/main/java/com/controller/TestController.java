package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class TestController {
	
	
 @RequestMapping(value="/register", method = RequestMethod.GET)
	public String aaa() {
		
		System.out.println("/register");
		return "xxx"; //xxx.jps
		
	}
	
	
	String name;



}

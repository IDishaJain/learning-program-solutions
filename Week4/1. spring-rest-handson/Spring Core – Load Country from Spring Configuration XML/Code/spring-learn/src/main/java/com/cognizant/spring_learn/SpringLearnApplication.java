package com.cognizant.spring_learn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


public class SpringLearnApplication {

	private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

	public static void main(String[] args) {
		LOGGER.debug("START of main()");
		displayCountry();
		LOGGER.debug("END of main()");
	}
	public static void displayCountry() {
		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		com.cognizant.springlearn.Country country = context.getBean("country", com.cognizant.springlearn.Country.class);
		System.out.println("Country (from XML): " + country);  // Debug print
	}

}

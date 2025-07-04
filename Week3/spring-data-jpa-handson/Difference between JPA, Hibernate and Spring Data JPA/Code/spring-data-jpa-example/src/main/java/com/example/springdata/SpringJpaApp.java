package com.example.springdata;

import com.example.springdata.entity.Employee;
import com.example.springdata.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringJpaApp implements CommandLineRunner {

    @Autowired
    private EmployeeService employeeService;

    public static void main(String[] args) {
        SpringApplication.run(SpringJpaApp.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        Employee emp1 = new Employee("Disha", "IT");
        employeeService.addEmployee(emp1);

        System.out.println("Employee saved successfully: " + emp1);
    }
}

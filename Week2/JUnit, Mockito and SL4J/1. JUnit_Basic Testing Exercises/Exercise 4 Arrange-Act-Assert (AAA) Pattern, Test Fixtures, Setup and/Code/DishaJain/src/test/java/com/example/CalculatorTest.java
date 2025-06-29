package com.example;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup: New Calculator instance created");
    }

    // Teardown method
    @After
    public void tearDown() {
        System.out.println("Teardown: Test completed");
    }

    @Test
    public void testAddition() {

        int a = 10;
        int b = 5;


        int result = calculator.add(a, b);


        assertEquals(15, result);
    }

    @Test
    public void testAdditionWithNegativeNumber() {
         int a = -3;
        int b = 7;


        int result = calculator.add(a, b);


        assertEquals(4, result);
    }
}

// https://www.javatpoint.com/java-map


import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;
import java.util.List;
import java.util.Set;
import java.util.HashSet;
import java.util.Map;
import java.util.HashMap;


public class Main
{
	public static void main(String[] args) {
    
        ArrayList<Double> a = new ArrayList<Double>();
        
        a.add((double)0);
        a.add(1.1);
        a.add(2.2);
        
        for( double i : a ){
            System.out.println(i);
        }
        
        Dog dog1 = new Dog("Brian", 15);
        Dog dog2 = new Dog();
        dog1.redirectToGetDogProfile();
        dog2.redirectToGetDogProfile();
        
        Mydog mydog = new Mydog("Alex", 30, "white");
        mydog.getMyDogInfo();
        System.out.println(mydog.name);
        
        for( int i : dog1.returnArray()){
            System.out.println(i);
        }
    
	}
}

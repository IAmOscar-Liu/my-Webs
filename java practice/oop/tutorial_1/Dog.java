
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;
import java.util.List;
import java.util.Set;
import java.util.HashSet;
import java.util.Map;
import java.util.HashMap;

public class Dog{
    
    public String name;
    public int age;
    public String brand = "Huskey";
    


    public Dog(String name, int age){
        this.name = name;
        this.age = age;
        

    }
    
    public Dog(){
        name = "Default name";
        age = 100;
        
    }
    
    public void getDogProfile(){
        System.out.println("name: " + name + ", age: " + age);
    }
    
    public void redirectToGetDogProfile(){
        getDogProfile();
    }
    
    public ArrayList<Integer> returnArray(){
        ArrayList<Integer> numbers = new ArrayList<Integer>();
        numbers.add(5);
        numbers.add(11);
        numbers.add(3);
        return(numbers);
    }
    
}
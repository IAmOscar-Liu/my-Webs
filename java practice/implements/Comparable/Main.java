// https://www.javatpoint.com/java-map


import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;
import java.util.List;
import java.util.Set;
import java.util.HashSet;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator; 

public class Main
{
	public static void main(String[] args) {
    
        Student Oscar = new Student("Oscar");
        Student Joe = new Student("Joe");
        Student Oscar_2 = new Student("Oscar");
        
        System.out.println(Joe.equals(Oscar_2));
        System.out.println(Oscar.compareTo(Joe));
        System.out.println(Oscar);  // You don't have to call Oscar.toString()
	}
}

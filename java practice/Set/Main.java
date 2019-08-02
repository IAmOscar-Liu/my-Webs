/******************************************************************************

                            Online Java Compiler.
                Code, Compile, Run and Debug java program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;
import java.util.List;
import java.util.Set;
import java.util.HashSet;

public class Main
{
	public static void main(String[] args) {

        Set<Integer> t = new HashSet<Integer>();
        t.add(1);
        t.add(2);
        t.add(3);
        t.add(4);
        t.add(1);  // This line will be ingored because there is already an element with the value 1
        
    
        System.out.println(t);
        int check = -2;
        System.out.println("Is " + check + " in the set?  " + t.contains(check));
	}
}

/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
import java.util.*;
import java.util.stream.*;
import java.util.stream.Collectors; 


public class Main
{
    
    public static HashMap<String, String> myMap = new LinkedHashMap<>();
    
    public static List<int[]> answers = new ArrayList<>();
    
	public static void main(String[] args) {
      
      myMap.put("name", "Oscar");
      myMap.put("sex", "male");
      
      myMap.entrySet().forEach(el -> System.out.println("Key: " + el.getKey() + " Value: " +  el.getValue()));
	
	    
	  answers.add(new int[]{1,2,3});
	  answers.add(new int[]{4,5,6});
	  
	  List<int[]> newAnswers = answers
	    .stream()
	    .map(el -> new int[]{el[0]*10, el[1]*10, el[2]*10})
        .collect(Collectors.toList());
        
      List<int[]> newArrListAnswers = answers
	    .stream()
	    .map(el -> new int[]{el[0]*10, el[1]*10, el[2]*10})
        .collect(Collectors.toCollection(ArrayList::new));
	    
	    
	  newAnswers
	    .forEach(el -> System.out.println("[" + el[0] + ", " + el[1] + ", " + el[2] + "]"));
	    
	  newArrListAnswers
	    .stream()
	    .forEach(el -> System.out.println("[" + el[0] + ", " + el[1] + ", " + el[2] + "]"));  
	}
}

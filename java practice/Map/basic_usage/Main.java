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
    
        
        // This is the Non-Generic (Old style)
        Map m = new HashMap();
        m.put("name", "Oscar");
        m.put("age", 27);
    
        System.out.println(m.get("age"));
        
        Set set = m.entrySet();
        Iterator itr = set.iterator(); 
        while(itr.hasNext()){  
            //Converting to Map.Entry so that we can get key and value separately  
            Map.Entry entry=(Map.Entry)itr.next();  
            System.out.println(entry.getKey()+" "+entry.getValue());  
        }
        
        
        // This is the Generic (New Style)
        HashMap<String, Integer> people = new HashMap<String, Integer>();
        
        // Add keys and values (Name, Age)
        people.put("John", 32);
        people.put("Steve", 30);
        people.put("Angie", 33);
        
        System.out.println("People contains 42? " + people.containsValue(42));
        System.out.println("People contains 'Steve'? " + people.containsKey("Steve"));
        // Using keySet to access to keys
        for (String i : people.keySet()) {
          System.out.println("key: " + i + " value: " + people.get(i));
        }
        // Using values to access each value
        for(int i : people.values()){
            System.out.println("value: " + i);
        }
        
        // Another way to iterate the loop
        for(Map.Entry p: people.entrySet()){  
           System.out.println("Entry key: " + p.getKey() + "value: "+ p.getValue());  
        }
        
	}
}



public class Main
{
	public static void main(String[] args) {
	    Level lv1 = Level.LOW;
	    
	    // Using Level.values() will return an array
	    
    
      for(Level value : Level.values()){
          System.out.println(value.toString());
      }
	    
	    
	    if(lv1 == Level.LOW){
	        System.out.println(lv1);
	    } else if(lv1 == Level.MEDIUM){
	        System.out.println(lv1);
	    } else{
	         System.out.println(lv1);
	    }
	}
}

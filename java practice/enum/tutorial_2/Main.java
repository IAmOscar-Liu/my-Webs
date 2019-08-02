

public class Main
{
	public static void main(String[] args) {
	    Level lv1 = Level.LOW;
	    
        System.out.println(lv1.getLv1());
        
        System.out.println(Level.valueOf("LOW"));
        
        lv1.setLv1(5);
        
        System.out.println(lv1.getLv1());
	}
}

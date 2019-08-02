import java.util.ArrayList;


public interface Vehicle{
    // All methods have no body
    final int capacity = 5;
    final ArrayList<String> passengerList = new ArrayList<>();
    
    void changeGear(int a);
    void speedUp(int a);
    void slowDown(int a);
    
    default void out(){
        System.out.println("Default method");
    }
    
    static int add9(int b){
        return b + 9;
    }
}
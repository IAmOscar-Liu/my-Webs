
public class Outerclass{
    
    public void inner(){
        class Innerclass{
            public void display(){
                System.out.println("This is an inner class");
            }
        }
        
        Innerclass in = new Innerclass();
        in.display();
    }
}

public class Outerclass{
    public class Innerclass{
        public void display(){
            System.out.println("This is an inner class");
        }
    }
    
    public void inner(){
        Innerclass in = new Innerclass();
        in.display();
    }
}
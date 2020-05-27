public abstract class Base {
    Base() { 
        System.out.println("Base Constructor Called"); 
    } 

    abstract void abstractMethod(); 

    void notAbstractMethod(){
        System.out.println("I'm a non-abstract method in abstract class");
    }

    final void finalAbstractMethod(){
        System.out.println("I'm a final non-abstract method. I can't be mutated");
    }
}
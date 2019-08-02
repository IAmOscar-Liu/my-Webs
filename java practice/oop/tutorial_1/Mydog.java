
public class Mydog extends Dog{
    // private String name;
    // private int age;      // If we don't specify the private here, it will be public
    private String color;
    
    public Mydog(String name, int age, String color){
        super(name, age);
        this.color = color;
    }   
    
    public void getMyDogInfo(){
       System.out.println(super.brand);        
       super.redirectToGetDogProfile();
       System.out.println("name: " + name + ", age: " + age + ", color: " + color);
    }
    
}
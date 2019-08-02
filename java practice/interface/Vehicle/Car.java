
public class Car implements Vehicle{
    private int gear = 1;
    private int speed = 10;
    
    public void changeGear(int gear){
        this.gear = gear;
    }
    
    public void speedUp(int change){
        speed += change;
    }
    
    public void slowDown(int change){
        speed -= change; 
    }
    
    public void display(){
        passengerList.add("Oscar");
        passengerList.add("Joe");
        System.out.println("I'm a car, going " + speed + "km/h and I am in gear " + gear);
        System.out.println("The car can take " + capacity + " people");
        System.out.println("The car has passengers: ");
        for(String passenger : passengerList){
            System.out.println(passenger + " ");
        }

        out();  // 'out()' is a default method from interface
    }
    
}
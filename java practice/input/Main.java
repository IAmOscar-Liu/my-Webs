import java.util.*;
//import java.util.ArrayList;
public class Main
{
	public static void main(String[] args) {
		System.out.println("Hello World");
		Car myCar = new Car(1,2);
		
		System.out.println(myCar.publicPar);
		System.out.println(myCar.getPrivatePar());
		
        // Scanner sc = new Scanner(System.in);
        // int number;
        // do {
        //     System.out.println("Please enter the number 19 ");
        //     while (!sc.hasNextInt()) {
        //         System.out.println("That's not a number!");
        //         sc.next(); // this is important!
        //     }
        //     number = sc.nextInt();
        // } while (number != 19);
        // System.out.println("Thank you! Got " + number);
        
        //Car[] carlist = new Car[5];
        
        ArrayList<Car> CarList = new ArrayList<Car>(5);
        
        CarList.add(myCar);
        
        CarList.add(new Car(3,4)); 
        
        CarList.add(new Car(5,6));
        
        CarList.add(new Car(7,8));
        CarList.add(new Car(9,10));
        CarList.add(new Car(11,12));
        
        for(Car car: CarList){
            System.out.println(car.publicPar);
	    	System.out.println(car.getPrivatePar());
	    	System.out.println("static method" + Car.someStaticMethod(car));
        }
		
		
	    System.out.println("The CarList has the length of " + CarList.size());
	}
}

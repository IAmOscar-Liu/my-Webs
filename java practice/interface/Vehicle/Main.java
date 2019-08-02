

public class Main
{
	public static void main(String[] args) {
		Car ford = new Car();
		
		ford.speedUp(10);
		ford.changeGear(2);
		ford.display();
		
		System.out.println(Vehicle.add9(5));  // Vehicle.add9() is a method from interface
	}
}


public class Main
{
	public static void main(String[] args) {
		Derived d = new Derived();
		
		d.abstractMethod();
		
		d.notAbstractMethod();
		
		d.finalAbstractMethod();
	}
}

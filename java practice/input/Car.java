public class Car{

  public int publicPar ;
  
  private int privatePar;

  public Car(int pubP, int priPar){
    System.out.println("This is the class car");
    this.publicPar = pubP;
    this.privatePar = priPar;
  }
  
  public int getPrivatePar(){
      return this.privatePar;
  }
  
  public static int someStaticMethod(Car _Car){
      return _Car.privatePar;
  }
  
  public static void main(String[] args) {
		System.out.println("This is the car class");

  }
  

}

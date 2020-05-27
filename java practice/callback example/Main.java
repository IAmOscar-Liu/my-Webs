/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
public class Main
{
    public static OnGeekEventListener mListener; // listener field 
  
    // setting the listener 
    public static void registerOnGeekEventListener(OnGeekEventListener mListener) 
    { 
        mListener = mListener; 
    } 
  
  
    // Driver Function 
    public static void main(String[] args) 
    { 
        B obj = new B(); 
        //OnGeekEventListener mListener = new A(); 
        //obj.registerOnGeekEventListener(mListener); 
        // obj.registerOnGeekEventListener(new A()); // A is the interface of OnGeekEventListener, assign A to class B 
        //obj.doGeekStuff();   // call B to execute the interface of OnGeekEventListener
        
        obj.executeGeekStuff( new A() );
    } 
}

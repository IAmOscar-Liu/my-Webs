public class B { 
  
    public OnGeekEventListener mListener; // listener field 
  
    // setting the listener 
    public void registerOnGeekEventListener(OnGeekEventListener mListener) 
    { 
        this.mListener = mListener; 
    } 
  
    // my synchronous task 
    public void doGeekStuff() 
    { 
  
        // perform any operation 
        System.out.println("Performing callback before synchronous Task"); 
  
        // check if listener is registered. 
        if (this.mListener != null) { 
  
            // invoke the callback method of class A 
            mListener.onGeekEvent(); 
        } 
    } 

    public void executeGeekStuff(OnGeekEventListener mListener2){
        System.out.println("Performing callback before synchronous Task123");
        mListener2.onGeekEvent();
    }
  
} 
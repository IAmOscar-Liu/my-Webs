//Class

class Vehicle{
  String model;
  int year;
  
  Vehicle(this.model, this.year);
  
  void showOutput(){
    print(model);
    print(year);
  }
}

class Car extends Vehicle{
  double price;
  
  Car(String model, int year, this.price) : super(model, year);
  
  @override
  void showOutput(){
    super.showOutput();
    print(price);
  }
} 

// Getters and Setters
class  Rectangle{
  num left, top, width, height;
  
  Rectangle(this.left, this.top, this.width, this.height);
  
  // Define the calculated properties: right and bottom
  num get right => left + width;
  set right(num value) => left = value - width;
  num get bottom => top + height;
  set bottom(num value) => top = value - height;
}

void main() {

    var car1 = Car('Accord', 2014, 15000);
    car1.showOutput();
  
  var rect = Rectangle(3,4,20,15);
  print(rect.left);
  rect.right = 12;  // set right
  print(rect.right);  // get right
}


   
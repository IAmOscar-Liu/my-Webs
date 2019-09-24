//Class

class Person{
  String name;
  int age;
  
//   Person(String name, [int age = 18]){
//       this.name = name;
//       this.age = age;
//   }
  
  // Or this way
  Person(this.name, [this.age = 18]);
  
  // named constructor
  Person.guest(){
    name = 'Guest';
    age = 30;
  }
  
  void showOutput(){
    print(name);
    print(age);
  }
}

class X {
  final name; // type will be defined by inferred value
  static const int age = 10; // only static const can be used
  
  X(this.name);
}

void main() {
    Person person1 = Person("Oscar");
    person1.showOutput();
    Person person2 = Person("Joe", 19);
    person2.showOutput();
    Person person3 = Person.guest();
    person3.showOutput();
  
   print(X.age);
   var x = X('Jack');
   print(x.name);
}


   
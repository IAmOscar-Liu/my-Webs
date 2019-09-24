main(){
  
    String name = "Oscar";
    int age = 26;
    print("$name is $age years old");
  
    // multi-line string
    String s1 = '''abc
xyz
123 ''';
    String s2 = """aaa
bbb
ccc""";
    print(s1);
    print(s2);
  
  // type conversion
  var one = int.parse('1');
  print(one.runtimeType);
  
  var onePointOne = double.parse('1.1');
  print(onePointOne.runtimeType);
  
  String oneAsString = 1.toString();
  print(oneAsString.runtimeType); 
  
  String piAsString = 3.14159.toStringAsFixed(2);
  print(piAsString.runtimeType);
  
  if(2 is int) print("It's integer");
  if('2.01' is String) print("It's String");

 
}
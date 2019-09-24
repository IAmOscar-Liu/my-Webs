// Collection

main(){
  // List
  List<Object> myList = ['Jack', 'Oscar', true, 112];
  print(myList[1]);
  print(myList.length);
  
  List<Object> myNewList = [...myList];
  myNewList[2] = false;
  print(myList);
  print(myNewList);
  
  // Set
  // var halogens = <String>{'flourine', 'chlorine'};
  // or 
  Set <String> halogens = {'flourine', 'chlorine'};
  print(halogens.runtimeType);
  for(var halogen in halogens){
    print(halogen);
  }
  
  // Map
//  var students = {
//    1: "Oscar",
//    2 : "Gary",
//    3: "Tim"
//  };
  // or
 Map<int, String> students = {
     1: "Oscar",
     2 : "Gary",
     3: "Tim"
 } ;
 print(students.runtimeType); 
 print(students[2]); 
}
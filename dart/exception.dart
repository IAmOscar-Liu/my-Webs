// Exception

int mustGreaterThanZero(int val){
  if(val <= 0){
    throw Exception("Value must be greater than zero");
  }
  return val;
}

void letVerifyTheValue(var val){
  var valueVerification;
  
  try{
    valueVerification = mustGreaterThanZero(val);
  }catch(e){
    print(e);
  }finally{
    print('Value vertified: $valueVerification');
  }
}

void main() {
    letVerifyTheValue(1);
    letVerifyTheValue(-1);
}
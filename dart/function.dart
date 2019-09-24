//Function

void main() {
    print(sum(2,3));
    print(optionalSum(10));
    print(optionalSum(10, num2: 2)); // num2 is optional
    print(optionalSum2(10));
    print(optionalSum2(10, 12));
}

dynamic sum(var num1, var num2) => num1 + num2;

// dynamic optionalSum(var num1, {var num2}) => num1 + (num2 ?? 0);  // if no num2, it will be set to 0

// another way to do so
dynamic optionalSum(var num1, {var num2 = 0}) => num1 + num2 ;  // if no num2, it will be set to 0

// optional parameter using square bracket
dynamic optionalSum2(var num1, [var num2]) => num1 + ( num2 ?? 0) ;
   
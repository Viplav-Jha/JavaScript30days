var x =5;
var y=5;
console.log("Is both x and y equal or not " + x==y);
output: false
console.log("Is both x and y equal or not, (x==y));
output: true
--------------------------------------------------
Reason behind You are concatenating "Is both the x and y is equal or not" with x first and comparing with y. This will give you false.
You can put a bracket around x==y. 
console.log("is both the x and y is equal or not "+ (x==y))
op: Is both the x and y is equal or not true

Or use comma:
console.log("is both the x and y is equal or not ", x==y)
op: is both the x and y is equal or not true
---------------------------------------------------------------------------------------------------
  
 // operator
// Increment (postfix)
var num =15;
newNum= num++ + 5;
console.log(num);
console.log(newNum);  
//In postfix the value first assign then increment

// Decerment operator (prifix)

var num =18;
newNum= ++num +4;
console.log(num);
console.log(newNum)

// in prefix the value first increment then print.
----------------------------------------------------------
comparsion  operator
var a=30;
var b=10;
console.log(a > b);
output: true
----------------------------------------------------------------------------------
logical operator
var a=30;
var b=-20;
console.log(a > b && b > 0 && 0 < b);
-----------------------------------------------------
Conditional or Ternary Operator : It takes three operands 
variablename =(condition)? value1 :value2

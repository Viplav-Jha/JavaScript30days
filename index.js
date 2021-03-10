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

function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

myFirst();
mySecond();
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

var age=17;
((age <18) ? you can give vote : you can not eligible);
---------------------------------------------------------------------------------------------------------------------------------
  
  // program to generate a multiplication table

// take input from the user
const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}
/* program to generate a multiplication table
upto a range */

// take number input from the user
const number = parseInt(prompt('Enter an integer: '));

// take range input from the user
const range = parseInt(prompt('Enter a range: '));

//creating a multiplication table
for(let i = 1; i <= range; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}

--------------------------------------------------------------------------------------
Callback------> A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished

var x =5;
var y= 5;
console.log("Is both x and y equal or not " + x==y);
output: false
console.log("Is both x and y equal or not, (x==y));
output: true ;
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
console.log(newNum);

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
// example
function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

myFirst();
mySecond();
------------------------------------------------------------------------------------------------
Asynchronous JS

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
---------------------------------------------------------------------------------------
// JavaScript Array

var cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
document.getElementById("demo").innerHTML = cars[0];
// --------------------------------------------------------------------
const myArray = ['h',  'e', 'l', 'l', 'o'];
// first element
console.log(myArray[0]);  // "h"

// second element
console.log(myArray[1]); // "
-------------------------------------------------------------------------------------
var x = 0;
var array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 alert("Element: " + array[x] + " Added at index " + x);
 x++;
 document.getElementById("text1").value = "";
}

function display_array()
{
   var e = "<hr/>";

   for (var y=0; y<array.length; y++)
   {
     e += "Element " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}
----------------------------------------------------------------------
// Map method()

// The map() method creates a new array with the results of calling a function for every array element.

// The map() method calls the provided function once for each element in an array, in order.

// Note: map() does not execute the function for array elements without values.

// Note: this method does not change the original array.
-----------------------------------------------------------------------------------------
  
  Example:-
    
  <!DOCTYPE html>
<html>
<body>

<p>Click the button to get the square root of each element in the array.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
var numbers = [4, 9, 16, 25];

function myFunction() {
  x = document.getElementById("demo")
  x.innerHTML = numbers.map(Math.sqrt);
}
</script>

</body>
</html>

----------------------------------------------------------------------------------------------
// program to find the factorial of a number

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}
----------------------------------------------------------------------------------
// generating a random number
const a = Math.random() * (10-1) + 1
console.log(`Random value between 1 and 10 is ${a}`);
-------------------------------------------------------------------------------------

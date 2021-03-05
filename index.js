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

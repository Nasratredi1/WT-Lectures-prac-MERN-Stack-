console.log("My first JS from an external file");

// Js is a loosly typed language. we don't need to write a type for a variable.
var x = 5;
var y = 9;

console.log( x * y);

let a = 9 ;
let b = 6 ;

console.log(a + b);
console.log(a / b);

// How we write a Function in JS.

function sum (a , b) {
    return a + b;
}

console.log( sum (x ,y)) // we are passing two variable x and y with replace of a and b.

// how to assign fucntion to a variable.
var mySum = sum;
console.log(mySum);
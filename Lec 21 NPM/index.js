//const calculator = require ("./Calculator");// first line comment: this is the way to export function from another file .
const {sum, subtract}  = require ("./Calculator");// we can also like that without obj destructurization  and that is how we do multipl imports./
//const {sum, subtract} = calculator;// this is obj destructrization agr is obj calculator ka index me sub ka kuch chez ayega to waha pr dalegha , sgr subtract ka ayega to waha pr dalega.
console.clear(); 
//console.log ("My Code is Starting");
//console.log(__dirname );
//console.log(__filename);
// b\c calculator is an object. 
console.log(subtract(3,6));





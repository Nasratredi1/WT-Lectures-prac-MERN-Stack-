// function test (){
//     return "Ali";

// } 
//this is arrow function  syntax:funname = ()=>{}
let test = () =>{  
    return "Ali";

} ;
console.clear();
console.log(test());
//console.log(test); // passing refrence

// you can write single line function
// let test2 = () =>  "Ali";
// console.log(test2());

//taking input
let test3 = (name) =>{  
   if(name == "Ali") return true; 
   else return false;// thos can also be writtes as name =="Ali"? true:false;

} ;
console.log("Ali");

// arrow func shortend  and if else shorthand 
const testa = fname => (fname =="Ali"? true:false);// if you want to give input one and return one then there is no need write in bracket.
console.log(testa("Ali1"));
console.log( 6 == 6 ? "wow": "Hello");
console.log(5 > 6 && "this is Some test");// cheack first condition if it is true they print text otherwise return false.

 
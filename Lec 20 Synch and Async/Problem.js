console.clear();
function makePizza(flavour){
    // they call to this function after 1000 ml second
    setTimeout(function(){
        console.log("Preparing pizza");
        return "prepared" + flavour+ "pizza";
    },1000);
    return "Order recived "+flavour + " Pizza";
    
}
// makePizza return order recieved instruction first.
console.log(makePizza("Tikka"));
/* output
Order recived Tikka Pizza
Preparing pizza  // why there is not print perpared tikka pizza actually we want to return this. B\c  Database access call first went then they return back when they back on that time the execution of the program was finisher that ways they don't print that .
this is out main problem  now we want to address this problem.

*/
// there is two function in js 1) timeout 2) turbel 
//syntax for setTimeout fun Async  :setTimeout(function(){},1000);
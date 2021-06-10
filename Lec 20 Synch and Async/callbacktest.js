console.clear();
function makePizza(flavour, callback){
    console.log ("Order Received");
    console.log("Preparing pizza");
    setTimeout(function(){
        callback (flavour + "pizza");
    },1000);
}
 // this function called after one second
function handlePizza (pizza){
    console.log("Eating " +  pizza);
}
makePizza("Tikka", handlePizza);
console.log ("pizza Ordered");

/* output
Order Received
Preparing pizza
pizza Ordered
Eating Tikkapizza

*/

// if you go to pizza shop and there is more customer and more rush and they said to you give us your number
// when we become free then we will call you and send you your order this is called call back.

// there is more mechanism they utilize callback like Jquery
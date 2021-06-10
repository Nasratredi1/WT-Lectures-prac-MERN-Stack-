// Object Distructuring (Object passing)
console.clear();
let address = {
    title : "Liberty Market", 
    location: "Lahore"
};
//function which takes 2 output and takes this input from an object
function printAddress(title , location){
    console.log (title + "is located in "+ location)
}

console.log (address)

const { title, location} = address;// you can declare that like let

printAddress (title, location)
console.log(title);
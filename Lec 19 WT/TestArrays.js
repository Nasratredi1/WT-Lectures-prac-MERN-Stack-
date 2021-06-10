console.clear();

// let students = ["Ahmad", "Ali", "wali"];//0,1,2
// students[5] = "khalid";//5 3 and 4 is empty.
// console.log(students);
// console.log(students[3]);// for printing value of index 3 which is undefined

let students = ["khalid","Fawad", "Jawad"];
let serchStudents = students.find(findName);// find name 
let serchIndex = students.findIndex(findName);// find index
console.log(serchStudents);
console.log(serchIndex);
students.sort();// for sorting the array.
console.log(students);
//students.splice(1,0,"shahid","irfan");// insert shahid in 1st index and 0 mean don't delete anyone
students.splice(1,2,"shahid","irfan");// insert shahid in 1st index and 2 mean delete 2 elements. 
console.log(students);
console.log(...students); // spread operator out element from an array

function findName(std){  // takes one input std.
    if (std == "Fawad") return true;
    else return false;
    
}

students.sort(customSort);
function customSort(a , b){
    if (a > b) 
    return -1;
    else return 1;
}
// map function
let rates = [2,5,10];
let newRates = rates.map (function(r){// within func i pass paramater
    return r*2;

});
console.log(newRates); // they perform operation and return new array.
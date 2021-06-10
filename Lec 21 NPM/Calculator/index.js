const sum = require("./sum");// this is how we import a single export
const subtract = require("./subtract");
// make an obj for exporting two file 
const funcs = {sum: sum, subtract: subtract};
//const funcs = {sum,subtract};// you can write like above and this sentence is same.
module.exports = funcs;// this is how we do multiple export
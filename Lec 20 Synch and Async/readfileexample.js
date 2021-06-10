// fs is a module name .
const fs = require ("fs");
console.log ("Reading  File");
//let data = fs.readFileSync('mytxt.txt','utf8'); // sync fun
let data = fs.readFile("mytxt.txt","utf8",(err,data)=>{// async functi
    console.log(data);
});
//console.log (data);
console.log("Read File")
//onsole.log (data);

/*  Output of  Sysnc fun
Reading  File
Read File
This is my text file

This is called Sync mean they print the output in a sequance.
*/

/* Output of Async fun (immeditly run there is no sequance) there is no concurent execution  async func in the future .
Reading  File
Read File
This is my text file


*/
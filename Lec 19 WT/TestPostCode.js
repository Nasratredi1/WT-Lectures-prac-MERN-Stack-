console.clear();
let PostCodes = require("./PostCodes.json");
//console.log(PostCodes.length);

// let obj = PostCodes.find(p =>{
//     return p.Region == "Crawley";
// });
// you can write like this.
// finding regio crwaley like this.
// let obj = PostCodes.find(p => p.Region == "Crawley");

// function findCrawley (post){
//     if (post.Region == "Crawley") return true;
//     else return false;
// }

// if you want to find index no then copy above cope and paste it write fun of findIndex
let obj = PostCodes.findIndex(p => p.Region == "Crawley");

function findCrawley (post){
    if (post.Region == "Crawley") return true;
    else return false;
}
console.log(obj);

console.log(PostCodes.slice(200,202)); // they show indexces values.

 
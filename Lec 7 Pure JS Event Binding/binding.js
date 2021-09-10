
// Anonymous Function.   // window.onload and btn.onclick both are anonymous function.
window.onload = function(){
    //do all binding here
    var btn = document.getElementById("btnAdd");
    btn.onclick = function(){
        console.log("Handling Add New Todo Button");
    };
};


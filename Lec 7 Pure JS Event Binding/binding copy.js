console.log("Starting");
function handleAddNewTodo() {
  console.log("Handling Add New Todo Button");
}

function doBindings() {
  console.log("Bindings");
  var btn = document.getElementById("btnAdd");
  btn.onclick = handleAddNewTodo; // we pass the reference of above function.
}
window.onload = doBindings;
console.log("Finished");
// doBindings();
// will not do bindings as the document is yet not loaded.
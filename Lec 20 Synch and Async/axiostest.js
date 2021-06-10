const axios = require ("axios");

axios.get ("https://usman-recipes.herokuapp.com/api/recipes/hgfdg").then(res =>{
    console.log (res.data);
    // mean if there is error come.
}).catch(err => {
    console.log (err);
}); 

/*two liberary we discuss
  1) jquery
  2) axious promises based liberary.
  */
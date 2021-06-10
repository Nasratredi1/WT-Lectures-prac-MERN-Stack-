function makePizza(flavour){
    // they promises i will make you pizza
    // we pass two other function
       return new Promise( (resolve,reject)=>{
           if (flavour == "Fajita") reject ("Fajita is out of stock");
            else
           setTimeout(function(){
                console.log("Preparing pizza");
              resolve(flavour+"pizza");
            },1000);
    
        });
    }
    //calling promises like this.
    // this mean pehla promis karo phir mein apko fun deta hon os mein data pass karo.
    makePizza("Fajita1")
    .then(massage=>{
        console.log(massage) 
    }).catch(massage => {
        console.log(massage);
    });
    // promisess have 3 Stages
    
    // 1 pending
    // 2 resolved
    // 3 rejected
    //console.log(makePizza());
//Immediately Invoked function Expression(IIFE)
//To eliminate the pollution of Global Scope 

//named IIFE
(function tea(){
    console.log(`DB CONNECTED`);
    
})();

//Using ARROW Func.
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
    
})(`Sayan`)


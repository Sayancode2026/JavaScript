 let a=300//Global Scope

if(true){//local scope
    let a=10
    const b=20
    var c=30
    console.log("Inner value of a:",a);//10 
    
}
console.log(a);//300
// console.log(b);
console.log(c);//outside the scope still printed beacuse of using var this creates bugs so we dont use var

function one(){
    const username="sayan"

    function two(){
        const website="youtube"
        console.log(username);
        
    }
    //console.log(website);//outside the scope call occured error so in nested function the child func can access the parent function variable but nt vice-versa
    two()
    
}
one()



if(true){
    const username="Sayan"
    if(username==="Sayan"){
        const website=" youtube"
        console.log(username+website);
        
    }
    //console.log(website);//gave error accessing outside the inner func scope
    
}
//console.log(username)//gave error accessing outside the outer func scope


//++++++++++++++++++++++++++Concept++++++++++++++++++++++++

console.log(addone(6));
function addone(num){
    return num+1
}
console.log(addone(7));



//console.log(addTwo(2));//Cannot access 'addTwo' before initialization if assigned in variable 
const addTwo=function(num){
    return num+2
}
console.log(addTwo(2));//works well here 

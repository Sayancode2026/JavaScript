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



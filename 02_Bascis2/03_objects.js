const mySym=Symbol("Key1")

//key-value pairs(object literals)
const jsUser={
    name:"Sayan",
    "full name":"Sayan Bardhan",
    [mySym]:"myKey1",
    age:22,
    location:"Kolkata",
    email:"sayan@google.com",
    isLoggedin:false,
    lastLoginDays:["Monaday","Tuesday"]

}
//printing the objects
// console.log(jsUser.age);
// console.log(jsUser["age"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);


jsUser.email="sayanbardhan00@mico.com"
// Object.freeze(jsUser)
jsUser.email="dark123gmail.com"
// console.log(jsUser)

jsUser.greetings=function(){
    console.log("Hello Js User");
    
}

jsUser.greetingsTwo=function(){
    console.log(`Hello Js User, ${this.name}`);
    
}


console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());

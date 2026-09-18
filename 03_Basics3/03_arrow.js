const user={
    username:"Sayan",
    price:999,

    welcomeMassege:function(){
        console.log(`${this.username},welcome to the website!!!`);
        console.log(this);
        

    }

}
// user.welcomeMassege()//Sayan,welcome to the website!!!
// user.username="baban"
// user.welcomeMassege()//baban,welcome to the website!!!

console.log(this);//{}

//But in browser when you run console.log(this) in return window object 

// function tea(){
//     let username="Sayan"
//     console.log(this.username);//undefined.So this is working on the objects only  not in functions 
    
// }
// tea()

const chai=() =>{
    let username="Sayan"
    console.log(this);//{}
    
}
chai()//{}



// const addTwoNum=(num1 ,num2) => {
//     return num1+num2
// }
const addTwoNum=(num1 ,num2) =>(num1+num2)//Implicit return 
const addTwo=(num1 ,num2) =>({username:"Sayan"})//Implicit return 

console.log(addTwoNum(3,4))//7
console.log(addTwo(3,4))//{ username: 'Sayan' }

// const myArr=[1,2,3,4,5]
// myArr.forEach() 
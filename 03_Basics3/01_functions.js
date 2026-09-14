function loginUserMessage(username="Baban"){
    if(!username){
        console.log("Please enter your user name");
        return
    }
    return  `${username} just logged in`
}

console.log(loginUserMessage("Sayan"));


function calculateCarPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCarPrice(6,56,500,2000));//[ 500, 2000 ]


const user={
    name:"Sayan",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.name},and price is ${anyobject.price}`);
    
}

//handleObject(user)//username is Sayan,and price is 199

//another way to handle object in fuction
handleObject({
    name:"Baban",
    price:599
})  

//second element of the array
const myArray=[10,20,50,100]
function getSecondelemet(arr){
    return arr[1]
}
console.log(getSecondelemet(myArray));//20
console.log(getSecondelemet([50,300,65,80]));//300






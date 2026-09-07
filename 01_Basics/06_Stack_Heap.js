//Primitive(Stack) 
//NonPrimitive(Heap)
let name="Sayan"
let anothername=name//send copy of original name 
anothername="Sayan Bardhan" 
console.log(anothername)
console.log(name)////so changes will be in copy original value not changes


//Non Primitive datatype(Call by Reference)
let userOne={
    email:"sayan@google.com",
    age:22
}

let userTwo=userOne
userTwo.email="baban@gmail.com"

console.log(userOne.email)//as it is get reference the changes will be in original value
console.log(userTwo.email)

/*
output:
baban@gmail.com
baban@gmail.com

*/
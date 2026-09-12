//singleton object
const FreeFireUser=new Object()
FreeFireUser.id="123abc"
FreeFireUser.name="DarkThug"
FreeFireUser.isLoggedIn=false
//console.log(FreeFireUser)

//nested objects 
const regularUser={
    email:"demo@gmail.com",
    fullname:{
        userFullname:{
            firstname:"Sayan",
            lastname:"Bardhan"
        }
    } 
}
//console.log(regularUser.fullname?.userFullname.firstname);//Sayan ? for optional chaining




const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"e",6:"f"}
//assign
//const obj3=Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2,...obj4}
//console.log(obj3)

//array of object come from DB 
const Users=[
    {
       name:"Sayan",
       email:"s@gmail.com"
    },
   {

   },
   {

   },
   {

   }
]

//console.log(Users[0].email)//access the array of object

console.log(Object.keys(FreeFireUser))
console.log(Object.values(FreeFireUser))
console.log(Object.entries(FreeFireUser))

console.log(FreeFireUser.hasOwnProperty('isLoggedIn'));//true

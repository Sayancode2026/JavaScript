let myDate=new Date()

console.log(myDate.toString())//Tue Sep 08 2026 20:20:44 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())//Tue Sep 08 2026
console.log(myDate.toTimeString())//20:25:49 GMT+0530 (India Standard Time)

console.log(myDate.toLocaleString())//8/9/2026, 8:20:44 pm
console.log(myDate.toLocaleDateString()) //8/9/2026
console.log(myDate.toLocaleTimeString()) // 8:24:48 pm

console.log(myDate.toDateString())//Tue Sep 08 2026
console.log(myDate.toTimeString())//20:27:26 GMT+0530 (India Standard Time)


console.log(myDate.toISOString())//2026-09-08T14:56:38.501Z
console.log(myDate.toJSON())//2026-09-08T14:56:38.501Z

console.log(typeof myDate)//object


let myCreateDate=new Date(2026,8,23)//(months start from 0-jan 1-Feb ....11-Dec)
let myCreateDate1=new Date("09-23-2026")//MM-DD-YYYY

console.log(myCreateDate.toDateString())//Wed Sep 23 2026
console.log(myCreateDate1.toLocaleString())//23/9/2026, 12:00:00 am


let timestamp=Date.now()//from 1st jan 1970 to todays date total time in miliseconds
console.log(timestamp)//1788880353328
console.log(myCreateDate1.getTime())//1790101800000(from 1st jan 1970 to 23 sept 2026 in milisecond) 
console.log(Math.floor(Date.now()/1000))//1788881448



let newDate=new Date()
console.log(newDate.toDateString())//Tue Sep 08 2026
console.log(newDate.getMonth()+1)//0-Jan ... 11-Dec  we add +1 for understanding and avoid confusion as Sept-9
console.log(newDate.getDate())

console.log(`Today is ${newDate.toDateString()} and in day is ${newDate.getDate()} and Month is ${newDate.getMonth()+1} and Year is ${newDate.getFullYear()} so on..`)



const newDate3 = new Date();
console.log(newDate3.toLocaleString('default', {
    weekday: "long"
}));//Tuesday


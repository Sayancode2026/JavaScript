const myArr=[0,5,6,7,10];//In JS array can be resizble 
const myArr2=["Superman","Batman"]
const myArr3=new Array(1,2,3,4);
console.log(myArr[2])
console.log(myArr2[0])
console.log(myArr3[3])
//length()
console.log(myArr.length);

//methods
myArr.push(12);//push method
myArr.push(15);
//pop method
myArr.pop()
myArr.unshift(3)//[3,  0,  5, 6, 7, 10, 12]
myArr.shift()//remove the first element
console.log(myArr);

console.log(myArr.includes(8));
console.log(myArr.indexOf(10));


const myArr4=myArr.join()//convert array elemnet into string
console.log(typeof myArr4);//string

//slice and splice
console.log("A ",myArr);
const myn1=myArr.slice(1,3);
console.log(myn1);
console.log("B ",myArr);

const myn2=myArr.splice(1,3);
console.log("C ",myArr);//the splice part removed from the original array the original array is manipulated
console.log(myn2)
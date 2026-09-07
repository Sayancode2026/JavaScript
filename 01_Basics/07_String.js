// let name="Sayan"
// let countRepo=100
// //console.log(name+"the count is "+countRepo)

// //String Interpolation
// console.log(`The name is ${name} and the count is ${countRepo}`);

// const gameName=new String('Sayan Bardhan')
// console.log(gameName.length)
// console.log(gameName[2])
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(3))
// console.log(gameName.indexOf('y'))

let str = "Hello JavaScript";

// length - returns total number of characters
console.log(str.length); // 16

// charAt() - returns character at index
console.log(str.charAt(0)); // H
console.log(str.charAt(6)); // J

// at() - returns character using positive or negative index
console.log(str.at(0)); // H
console.log(str.at(-1)); // t

// charCodeAt() - returns UTF-16 code of character
console.log("A".charCodeAt(0)); // 65

// codePointAt() - returns Unicode code point
console.log("😊".codePointAt(0)); // 128522

// indexOf() - returns first matching index
console.log(str.indexOf("Java")); // 6
console.log(str.indexOf("Python")); // -1

// lastIndexOf() - returns last matching index
console.log("banana".lastIndexOf("a")); // 5

// includes() - checks if substring exists
console.log(str.includes("Java")); // true
console.log(str.includes("Python")); // false

// startsWith() - checks starting characters
console.log(str.startsWith("Hello")); // true

// endsWith() - checks ending characters
console.log(str.endsWith("Script")); // true

// search() - finds index using string or regex
console.log("abc123".search(/\d/)); // 3

// slice() - extracts part of string and supports negative index
console.log(str.slice(0, 5)); // Hello
console.log(str.slice(6, 10)); // Java
console.log(str.slice(-6)); // Script
console.log(str.slice(6)); // JavaScript
console.log(str.slice(-10, -4)); // JavaSc

// substring() - extracts part of string without negative index
console.log(str.substring(0, 5)); // Hello
console.log(str.substring(6, 10)); // Java

// substr() - extracts by start and length (deprecated)
console.log(str.substr(6, 4)); // Java

// replace() - replaces first occurrence only
console.log("apple apple".replace("apple", "orange")); // orange apple

// replaceAll() - replaces every occurrence
console.log("apple apple".replaceAll("apple", "orange")); // orange orange

// toUpperCase() - converts to uppercase
console.log(str.toUpperCase()); // HELLO JAVASCRIPT

// toLowerCase() - converts to lowercase
console.log(str.toLowerCase()); // hello javascript

// trim() - removes spaces from both ends
console.log("   Hello   ".trim()); // Hello

// trimStart() - removes spaces from beginning
console.log("   Hello".trimStart()); // Hello

// trimEnd() - removes spaces from end
console.log("Hello   ".trimEnd()); // Hello

// split() - converts string into array
console.log("Ram,Shyam,Mohan".split(",")); // ['Ram','Shyam','Mohan']
console.log("Hello".split("")); // ['H','e','l','l','o']

// concat() - joins strings together
console.log("Hello".concat(" ", "World")); // Hello World

// repeat() - repeats string multiple times
console.log("ha".repeat(3)); // hahaha

// padStart() - adds characters at beginning
console.log("7".padStart(4, "0")); // 0007

// padEnd() - adds characters at end
console.log("7".padEnd(4, "0")); // 7000

// match() - returns first regex match
console.log("abc123xyz".match(/\d+/)); // ['123']

// matchAll() - returns all regex matches
for (let m of "a1 b2 c3".matchAll(/\d/g)) console.log(m[0]); // 1 2 3

// localeCompare() - compares two strings
console.log("apple".localeCompare("banana")); // -1
console.log("apple".localeCompare("apple")); // 0
console.log("banana".localeCompare("apple")); // 1

// normalize() - makes Unicode strings consistent
let a = "é", b = "e\u0301";
console.log(a === b); // false
console.log(a.normalize() === b.normalize()); // true

// isWellFormed() - checks valid Unicode string
console.log("Hello".isWellFormed()); // true

// toWellFormed() - fixes invalid Unicode
let bad = "\uD800";
console.log(bad.toWellFormed()); // �

// toString() - converts String object to primitive string
let obj = new String("Hello");
console.log(obj.toString()); // Hello

// valueOf() - returns primitive string value
console.log(obj.valueOf()); // Hello
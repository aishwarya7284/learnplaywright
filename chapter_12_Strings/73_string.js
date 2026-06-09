//single quote
let str = 'hi';

//double quote
let str1 = "hi";

//multi line
let str2 = `hi
hello
bye`;

console.log(String(200)); // "200"
// String(true); -> // "true"
//String(null); // "null"
String([1, 2]); // "[1,2]"

// string - data type
// String -> interface( which will help you to create a new strings)

let name1 = "Aish";
let msg = `Hello, ${name1}! 2 + 2 = ${2 + 2}`;
console.log(msg);
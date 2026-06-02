let actualStatusCode = 200;
let expectedStatusCode = 200;
let Result = actualStatusCode == expectedStatusCode ? "Pass" : "Fail";
console.log(`StatusCode is ${Result}`);

let statusCode = 404;
let category = statusCode < 300 ?
    "Success" : statusCode == 404 ?
        "Not Found" : "Other";
console.log(`Status code ${statusCode} is of category ${category}`);


let a = 25;
let b = 20;
let max = a > b ? a : b;
console.log(`Max value is ${max}`);

let x = 10;
let y = 5;
let z = 52;

let largest = x > y && x > z ? x : y > x && y > z ? y : z;
console.log(`Largest value is ${largest}`);
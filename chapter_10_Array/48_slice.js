let arr = [2, 4, 3, 1, 5]
//. // slice(start, end) — returns new array, does NOT mutate actual -> ( start, end-1) . index = 0
//Don't give the end, it will automatically take from start to end. 

console.log(arr.slice(2));
//console.log(arr);

console.log(arr.slice(1, 5));
console.log(arr.slice(-2));

let arr1 = [10, 20, 30, 40, 50];
let removed = arr1.splice(1, 2);   // remove 2 from index 1
console.log(removed);             // [20, 30]
console.log(arr1); 

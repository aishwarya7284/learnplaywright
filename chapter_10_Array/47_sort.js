let arr = ['a', 'e', 'c']
arr.sort();
console.log(arr);

let num = [2, 5, 8, 1, 23]
num.sort();
console.log(num);
// Natural Sorting, lexicographic Sorting)
//ascending order
num.sort((a, b) => (a - b));
console.log(num);
//desending order
num.sort((a, b) => (b - a));
console.log(num);

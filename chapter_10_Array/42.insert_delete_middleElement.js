let arr = [1, 2, 3, 4, 5, 6]
arr.push(7, 8)
console.log(arr);


//delete the middle element
arr.splice(4, 2) //index, how much element
console.log(arr);

//insert the middle element
arr.splice(4, 1, 33)
console.log(arr);
arr.splice(4, 2, 33)
console.log(arr);
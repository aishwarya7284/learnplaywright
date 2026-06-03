let a = 1, b = 2, c = 5;
if (a === b && b === c) {
    console.log("Equilateral triangle.")
} else if (a === b || b === c || a === c) {
    console.log("Isosceles triangle.")
} else {
    console.log("Scalene triangle.")
}

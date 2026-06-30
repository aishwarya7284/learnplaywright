class calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    add() {
        return this.num1 + this.num2;
    }
    sub() {
        return this.num1 - this.num2;
    }
    mul() {
        return this.num1 * this.num2;
    }
    div() {
        return this.num1 / this.num2;
    }
    mod() {
        return this.num1 % this.num2;
    }
}

//object
const cal = new calculator(10, 4);

console.log("Add", cal.add());
console.log("Sub", cal.sub());
console.log("mul", cal.mul());
console.log("Div", cal.div());
console.log("modulas", cal.mod());


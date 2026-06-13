function print() {
    console.log("normal function");
}

function placeOrder(item, callback) {
    console.log("order placed");
    callback();
}

//first way
placeOrder("pizza", print);


//second way anoy

placeOrder("burger", function () {
    console.log("anonymus funtion called without name");

});

//3rd way arrow function

placeOrder("momos", () => {
    console.log("Arrow function called")
});
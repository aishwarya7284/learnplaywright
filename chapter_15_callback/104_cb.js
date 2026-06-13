
function cafe(item, callWhenTableisReady) {
    console.log("Finding...1");
    console.log("Finding...2");
    console.log("Finding...3");
    console.log(item)
    callWhenTableisReady();
}

function callWhenTableisReady() {
    console.log("calling 9876543210");

}

cafe("coffee", callWhenTableisReady);

cafe("tea", function () {
    console.log("anoy fucntion");
});

cafe("milk", () => {
    console.log("arow function called");
});
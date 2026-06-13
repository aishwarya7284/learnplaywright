let order = new Promise(function (resolve, reject) {

    let foodReady = true;

    if (foodReady) {
        resolve("Food is ready");
    }
    else {
        reject("Order cancelled");
    }

});


console.log(order);  // output: Promise { 'Food is ready' }
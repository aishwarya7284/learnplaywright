let testRun = new Promise(function (resolve, reject) {

    let apiCall = true;

    if (apiCall) {
        resolve("ststus: done");
    }
    else {
        reject("Assertion failed");
    }
});

testRun.then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    // finally block always execute in this condiftion.
    console.log("I will execute anyhow!");
});

/*
 output: when apiCall =true

ststus: done
I will execute anyhow!

*/
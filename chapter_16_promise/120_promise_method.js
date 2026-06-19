//  ***************************
//  |                         |
//  |      Promise.all()      |
//  |                         |
//  *************************** 

let authStatus = true;

let authChecker;

(() => {
    if (authStatus) {
        authChecker = Promise.resolve("Auth Ok");
    } else {
        authChecker = Promise.reject("Authentication failed");
    }
})();

// let authChecker  = Promise.resolve("Auth Failed");
let dbChecker = Promise.resolve("DB OK");
let cacheChecker = Promise.resolve("Cache OK");

// Now we can check if all the pre-conditions are passed/resolved or rejected using Promise.all() method

// all method of Promise require an array of promises and returns a new promise where we can apply .then and check the result

Promise.all([authChecker, dbChecker, cacheChecker]).then(function (results) {
    console.log(results); // output: [ 'Auth OK', 'DB OK', 'Cache OK' ]
});

// in above example as all promises are resolved we will not get any error and .then block will execute but what if there is a rejection?

// even if just stores the rejection in varibale like below
//let rejectedPromise =  Promise.reject("Rajested Promise");// then this will thorw UnhandledPromiseRejection exception as there is a action which
// got failed due to some issue and node will think that it is miss to handle reject
// so it will throw UnhandledPromiseRejection exception
// so we need to use .cacth method on promise whenever there is rejection

// we can also declare the promises under promises.all instead of storing them in a varibale and then pass them as array 

Promise.all([
    Promise.resolve("Auth OK"),
    Promise.reject("DB Down"),
    Promise.reject("Caches Broken")
]).then(arrayOfResolvedPromises => console.log(arrayOfResolvedPromises)).catch(firstRejectedPromise => console.log(firstRejectedPromise));

// in above case .then will only run when all the promises in array are resolved, even one is rejected then .catch will execute and whenever there is
// rejected promise we must handle it with .cacth()


//  ****************************
//  |                          |
//  |   Promise.allSettled()   |
//  |                          |
//  **************************** 


Promise.allSettled([
    Promise.resolve("Test A Passed!"),
    Promise.reject("Test B Failed"),
    Promise.resolve("Test C Passed")
]).then(promises => {
    promises.forEach((promise, index) => console.log(`Test ${index + 1}: ${promise.status} - ${(promise.value || promise.reason)}`))
});

// here .then will not get only resolve promises cause in allSetteled method it does not matter if promise if fulfilled or rejected it will pass
// all the promises to .then

/*
Output:
Test 1: fulfilled - Test A Passed!
Test 2: rejected - Test B Failed
Test 3: fulfilled - Test C Passed
*/


Promise.allSettled([
    Promise.resolve("Test A Passed!"),
    Promise.reject("Test B Failed"),
    Promise.resolve("Test C Passed")
]).then(promises => console.log(promises));

/* output:

[
  { status: 'fulfilled', value: 'Test A Passed!' },
  { status: 'rejected', reason: 'Test B Failed' },
  { status: 'fulfilled', value: 'Test C Passed' }
]

all the promises passed to .then will be printed as a array of objects 
status and value will be the keys of resolved promises and status and reason will be the keys of rejected promises

*/
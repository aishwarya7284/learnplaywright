// CallBack example:

// lets assume below scenario - 

//Suppose we are doing a login test with below steps:

// openBrowser
// goToLoginPage
// enterCredentials
// clickLogin

// now we will written a functions for above stesp to perform


// 1. openBrowser: 

// now this function will first open the browser

function openBrowser1(callBack) {        //--> callBack is a parameter which this function needs while calling

    //Here we will write code to open the browser
    console.log("Opening Browser");

    // now once browser is opened and ready we will need to do the next step i.e. goToLoginPage

    // now here we will use the parameter callBack of this function which basically stores a function

    // now if we call this function here like: callBack();  then, when openBrowser gets called, both the codes of Opening the broswer
    // calling the callBack function will run simultaneously which is not possible in reality 

    // in reality first browser will open and then we need to call the next step
    // so we will use setTimeout function of JS like below 
    // setTimeout needs to parameters (function , timeout in milliseconds)

    setTimeout(() => callBack(), 1000);    // ()=>callBack() this is function as argument for setTimeout function and 1000 is milli seconds 
    // which is a waiting time for setTimeout function to run execute first argument

    // here setTimeout basically waits 1000ml to run '()=>callBack()'
}

// similarly we will create functions for remianing steps where will set one parameter for each function which is basically a 
// callBack function as a parameter

// 2. goToLoginPage:
function goToLoginPage1(callback) {

    console.log("Login page loaded");

    setTimeout(() => callback(), 2000);
}

// 3. enterCredentials:
function enterCredentials1(callback) {

    console.log("Credentials entered");

    setTimeout(() => callback(), 1000);
}

// clickLogin:
function clickLogin1(callback) {

    console.log("Click login");

    setTimeout(() => callback(), 1000);

}

// in all above functions we have a callBack function which we will call after sometime
// here we will send the function to this parameter which will basically the next step to execute

// below is how we will call these functions:

// THIS IS CALLBACK HELL 👇
// openBrowser1(function () {    // --> here we are calling our first function openBrowser1 and passing a function as a argument for callBack parameter
//     goToLoginPage1(function () {
//         enterCredentials1(function () {
//             clickLogin1(function () {
//                 console.log("Test Complete!");
//             });
//         });
//     });
// });


// It is called as callBack hell due to below reasons:
// Hard to read
// Hard to debug
// Hard to handle errors
// Deep nesting

// All these above callings of functions are in synchronous way (they will be called one by one as they are written in callback hell);


//----------------------------------------------------------------------------------------------------------------------------

// Promise example:


// now using a promise we can overcome the problems of callBack hell

// promise is a class/interface in JS which will resolve or reject the action/function

// 1. openBrowser
function openBrowser() {

    return new Promise(function (resolve) {

        // code to open browser will be written here
        // once browser opened we will resolve this openBrowser function like below

        // actually in reality we will check if browser is opened or not and then we will resolve or reject the openBrowser function
        // but as of now we are directly resolving the function so that we can run the next steps

        resolve("Browser opened");
    });
}


// in above example we have written a function for a action 'opening the browser' and this function is actually returning a promise
// promise means either it will resolve or reject functions/action

// it means we will will resolve openBrowser only when browser is actually opened and ready and reject when browser is not opened/ready

// this is how we will create function for each action like below

function goToLoginPage() {

    // code to navigate to login page will be here.
    // now based upon result of execution of above line, whether login page is loaded or not, we will resolve or reject this goToLoginPage() function
    // using the new Promise() object like below
    return new Promise(resolve => resolve("login page loaded"));
}

function enterCredentials() {

    // code to enter credentials
    // once credentials entered return a promise

    return new Promise(resolve => resolve("Credentials entered"));
}

function clickLogin() {
    //code to click on login button

    return new Promise(resolve => resolve("Login button clicked"));
}
function isHomePage() {

    // code to check if home page is loaded after login button click

    return new Promise(resolve => resolve("Home is loaded successfully"));
}


//  now in order to call these function which are returning promises we need to use the function called then and catch and finally

// starting with openBrowser
openBrowser().then(function () {
    return goToLoginPage();
});


// in above function openBroser calling we applied .then method
// .then means when openBrowser() returns a resolve status of the function then only execute the function which is under .then

// function under .then is basically returning the next step which should be performed 

// in this case it is returning the goToLoginPage function

//  now goToLoginPage function is also returing the promise then we need to apply .then function on .then function which is applied on openBrowser
// function while calling

// so hierarchy will look like:

openBrowser()
    .then(function (msg) {
        console.log("Step 1", msg);
        return goToLoginPage();
    }).then(function (msg) {
        console.log("Step 2", msg);
        return enterCredentials();
    }).then(function (msg) {
        console.log("Step 3", msg);
        return clickLogin();
    }).then(function (msg) {
        console.log("Step 4", msg);
        return isHomePage();
    }).then(function (msg) {
        console.log("Step 5", msg);
    }).catch(function (error) {
        console.log(error);
    }).finally(function () {
        console.log("Test Finished");
    });


openBrowser().then(msg => {
    console.log(msg);
    return goToLoginPage();
}).then((msg) => {
    console.log(msg);
    return enterCredentials();
}).then((msg) => {
    console.log(msg);
    return clickLogin();
}).then((msg) => {
    console.log(msg);
    return isHomePage();
}).then(msg => console.log(msg)).catch(error => console.log(error)).finally(() => console.log("Test Finished"));


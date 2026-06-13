function openBrowser(callback) {
    console.log("opening browser");
    setTimeout(function () {
        callback();

    }, 1000);
}

function loginPage(callback) {
    console.log("login page opened");
    setTimeout(function () {
        callback();
    }, 1000);

}


openBrowser(function () {
    loginPage(function () {
        console.log("Test Complete!")
    })
})
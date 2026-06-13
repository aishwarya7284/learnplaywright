let apiCall = new Promise(function (resolve, reject) {

    resolve({ status: 200, body: "User data" });

});

apiCall.then(function (response) {
    console.log(response.status);
});

// .then() runs only when promise is resolved successfully
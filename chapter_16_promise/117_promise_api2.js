let apiCall = new Promise(function (resolve, reject) {

    reject("500 Error");
});

// here above promise is returning a reject message

// below we are checking if promise returns reject or resolve if it si resolve then we use then and if it is reject and we use catch 

// then will get the value from resolve function in promise and catch will get the value from reject function from Promise

apiCall.then(function (response) {
    console.log("Success or Resolve");
}).catch(function (error) {
    console.log(error);
});
let statusCode = 404;
if (statusCode >= 200 && statusCode <= 299) {
    console.log("Input:", statusCode);
    console.log("Output: Success");
}
else if (statusCode >= 300 && statusCode <= 399) {
    console.log("Input:", statusCode);
    console.log("Output: Redirection");
}
else if (statusCode >= 400 && statusCode <= 499) {
    console.log("Input:", statusCode);
    console.log("Output: Client Error");
}
else if (statusCode >= 500 && statusCode <= 599) {
    console.log("Input:", statusCode);
    console.log("Output: Server Error");
}
else {
    console.log("Invalid")
}
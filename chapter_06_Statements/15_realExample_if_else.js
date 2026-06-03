let isUserLogin = true;
let userRole = "Admin";

if (isUserLogin) {
    if (userRole === "Admin") {
        console.log("Welcome Admin");
    } else if (userRole == "User") {
        console.log("Welcome User");
    } else {
        console.log("Welcome Guest");
    }
} else {
    console.log("Please login to continue");
}   
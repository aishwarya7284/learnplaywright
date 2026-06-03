//let attempts = 2;
//let attempts = 3;
let attempts = 0;

if (attempts >= 3) {
    console.log("🔒 Account Locked — Contact support")
}
else if (attempts >= 2) {
    console.log("1 attempt left before lockout")
}
else {
    console.log("Login successful")
}
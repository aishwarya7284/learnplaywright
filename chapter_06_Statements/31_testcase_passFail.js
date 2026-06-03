let expected = "Login Successful"
let actual1 = "Login Successful"
let actual2 = "Invalid Credentials"
//Output: ✅ Test Passed
// Output: ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials

if (expected === actual1) {
    console.log(actual1, "✅ Test Passed");
}
else {
    console.log(actual1, "❌ Test Failed");
}

if (expected === actual2) {
    console.log(actual2, "✅ Test Passed");
}
else {
    console.log(actual2, "❌ Test Failed");
}

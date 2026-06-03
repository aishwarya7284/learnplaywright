let testcaseResult = 90;
if (testcaseResult === 100) {
    console.log("Input:", testcaseResult);
    console.log("Output: GreenBuild");
}
else if (testcaseResult >= 90 && testcaseResult <= 95) {
    console.log("Input:", testcaseResult);
    console.log("Output: 🟡 Stable (investigate failures)");
}
else if (testcaseResult >= 70 && testcaseResult <= 89) {
    console.log("Input:", testcaseResult);
    console.log("Output: Unstable");
}
else {
    console.log("Input:", testcaseResult);
    console.log("Output: 🔴 Broken Build (block deployment)");
}

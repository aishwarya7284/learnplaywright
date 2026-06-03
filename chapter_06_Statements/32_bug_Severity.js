let bugCode = 5;

if (bugCode >= 9 && bugCode <= 10) {
    console.log("Severity: Critical (block release)");
}
else if (bugCode >= 7 && bugCode <= 8) {
    console.log("Severity: High");
}
else if (bugCode >= 4 && bugCode <= 6) {
    console.log("Severity: Medium");
}
else if (bugCode >= 1 && bugCode <= 3) {
    console.log("Severity: Low");
}
else {
    console.log("You have entered an Invalid score");
}
let s1 = "Fear";
let s2 = "Fare";

if (s1.length !== s2.length) {
    console.log("string lenghts are not same, so can't be Anangram");

}
else {
    let str1 = s1.toLowerCase().split("").sort().join("");
    let str2 = s2.toLowerCase().split("").sort().join("");

    if (str1 === str2) {
        console.log("The given strings are Anagrams");
    } else {
        console.log("The given strings are not Anagrams")
    }
}

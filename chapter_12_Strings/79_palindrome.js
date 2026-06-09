let str = "mad";
let rev = "";
let len = str.length;

for (let i = len - 1; i >= 0; i--) {
    rev = rev + str[i];
    //console.log(rev);

}
console.log(rev);

if (rev.toLowerCase() == str.toLowerCase()) {
    console.log("Its a palindrome");

} else {
    console.log("Its not a palindrome");
}





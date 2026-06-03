let year = 2024;
// let rem1 = year % 4;
// let rem2 = year % 100;
// let rem3 = year % 400


// if (rem1 === 0 || rem3 === 0 && !rem2 === 0) 
//     {
//     console.log("Its a leap year");
// }
// else {
//     console.log("not a leap year");
// }

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Its a leap year");
}
else {
    console.log("not a leap year");
}
"use strict";

let num = prompt("Enter the number");
let errorText = "";

if (num === null) {
    errorText = "Sorry that you do not want to enter the number";
    alert(errorText);
    throw errorText;
}
if (isNaN(num)) {
    errorText = "Sorry, number must be valid number";
    alert(errorText);
    throw errorText;
}
if (num < 1) {
    console.log("NaN");
}

let minDivisor = num;

for (let i = 2; i < num ; i += 1) {

    if (num % i === 0) {
        minDivisor = i;
        break;
    }
}

console.log(minDivisor);
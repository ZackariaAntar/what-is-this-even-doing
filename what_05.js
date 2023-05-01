// what_05.js

// Step 1
let firstNumber = 2;
let secondNumber = '8';

let thirdNumber = theDivider(firstNumber, secondNumber);

console.log('thirdNumber after step 1:', thirdNumber);

// Step 2
let fourthNumber = 1;

if (thirdNumber) {
    fourthNumber += thirdNumber;
}

console.log('fourthNumber after step 2:', fourthNumber);

// Step 3
let fifthNumber = theAddinator(fourthNumber, firstNumber, secondNumber);

console.log('fifthNumber after step 3:', fifthNumber);

// Step 4
let sixthNumber = theAddinator(fourthNumber, fifthNumber, thirdNumber);

console.log('sixthNumber after step 4:', sixthNumber);

function theAddinator(numberOne, numberTwo) {
    return numberOne / numberTwo;
}

function theDivider(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
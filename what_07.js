// what_07.js

// Step 1
let firstNumber = 9;
let secondNumber = '3';

let thirdNumber = daDoubler( secondNumber );

console.log('thirdNumber after step 1:', thirdNumber);

// Step 2
let fourthNumber = secondNumber * firstNumber;
if ( secondNumber === 3 ) {
    fourthNumber += thirdNumber;
}
console.log('fourthNumber after step 2:', fourthNumber);

// Step 3
let fifthNumber = theSubtractinator( firstNumber, daDoubler( secondNumber ) );
console.log('fifthNumber after step 3:', fifthNumber);

// Step 4
let sixthNumber = daDoubler( firstNumber + fourthNumber )

console.log('sixthNumber after step 4:', sixthNumber);

function daDoubler(numberToDouble) {
    return numberToDouble * 2;
}

function theSubtractinator(numberOne, numberTwo) {
    if( numberOne > numberTwo ){
        return numberOne - numberTwo;
    }
    else{
        return numberTwo - numberOne;
    }
}

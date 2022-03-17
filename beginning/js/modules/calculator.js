// ADD A PRIVATE FUNCTION CALLED CALCULATE

// ADD FOUR PUBLIC FUNCTIONS BELOW

// ADD FUNCTION

// SUBTRACT FUNCTION

// MULTIPLY FUNCTION

// DIVIDE FUNCTION

// EXPORT THE FOUR PUBLIC FUNCTIONS

const x = parseFloat(prompt('Enter a number: '));
const y = parseFloat(prompt('Enter second number: '));
const operator = prompt('Enter operator ( either +, -, * or / ): ');
var z;
function calculator( x, y ) {
    if (operator == '+') {
    let z = x + y;
    return z;
    }
        else if (operator == '-') {
            let z = x - y;
            return z;
        }
            else if (operator == '*') {
                let z = x * y;
                return z;
            }
        else {
            let z = x / y;
            return z;
   
        }
}
console.log(calculator(x, y));
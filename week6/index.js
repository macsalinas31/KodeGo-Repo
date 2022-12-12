// prompt the user to enter two numbers
let num1 = prompt("Enter the first number:");
    num1 = +num1; //this convert the string type to number
let num2 = prompt("Enter the second number:");
    num2 = +num2;
let num3 = prompt("Enter the third number:");
    num3 = +num3;
// prompt the user to enter the operator
let operator = prompt("Enter the operator (+, -, *, /):");

// compute the result based on the operator
let result;
if (operator === "+") {
    result = num1 + num2 + num3;
} else if (operator === "-") {
    result = num1 - num2 - num3;
} else if (operator === "*") {
    result = num1 * num2 * num3;
} else if (operator === "/") {
    result = num1 / num2 / num3;
}

	// display the result using alert
    alert(result);


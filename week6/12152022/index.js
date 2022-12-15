//Modern JS Parameters

//Defauls parameters
//old way
const add = (num1, num2) => {
    //condition ? true value : fasle value = ternary operator / if... else
    num2 = typeof num2 !== 'undefined' ? num2 : 0;
    return num1 + num2;
}
console.log(add (25));


//newa way
const multiply = (num1, num2 = 1) => {
        return num1 * num2;

}
console.log(multiply (99));
console.log(multiply (99, 2));
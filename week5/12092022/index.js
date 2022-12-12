//variable
// initialization

let age = 25;
const name = "Jose";

age = 26;
//display functions
console.log(age);


// alert("Hello Vlog!");
// prompt("Enter a number");

//date types
const firstName = "Mac"; //string data type, ("", '')sring literal
const message = `This 
is my 
message`; //string (``) back tick . template literal
const greeting = `Hello ${ firstName }`; //$ {expression } only for template literal
const favoriteNumber = 7; //number data type
const average = 99.99; //number date type
const isHappy = true; //bolean 
const isHUngry = false; //bolean // used in making decision
const value = null; //null
const unDef = undefined // undefined

//operators
// asignment operator =

const num1 = 15;
const num2 = 5;

//String + (String or number) = string
//concatenation, concatenate or pagsamahin
//type coercion = automatic binabago ung data type most of the time sa string and numbers na nag concatenate = soley ginagamit ung sting literal
console.log( "Number 1: " + num1); //automatic gagawing string ung number
// \n ay simble para sa new line
console.log("This \n is \n another \n line")

//Math operators
//console.log("Addition: " + (num1 + num2) );
console.log(`Addition: ${num1 + num2}`);
console.log(`Subtraction: ${num1 - num2}`);
console.log(`Multiplication ${num1 * num2}`);
console.log(`Division: ${num1 / num2}`);
console.log(`Modulo: ${num1 % num2}`)


let count = 10;
//increment ++
// console.log(count)
console.log(count++); //post-fix increment pag tinawag mo ung variable, autoamtic plus 1

// cont +=1; increment by 1
// count; // call the variable
// console.log(count)

console.log(++count); //pre-fix increment

//decrement --

console.log(count--); //post-fix decrement pag tinawag mo variable automatic minus 1
console.log(--count); //pre-fix decrement

//More assignment operators
// = which we use to assign value

let sum = 0;
sum += 9; //addition assignment +=
//sum = sum +9;


let diff = 10
diff -= 3; //subtraction assignement -=
// diff = diff -3

let product =1;
product *5; //multiplication assignemnt

let quotient = 24;
quotient /= 6; //Division assignemnt

let remainder =10;
remainder %= 3; //Module assignemnt

//conditionals/conditional statements

let number = 25;
let description;
//if statement
if (number >= 20) {
    description = "Number greater than or equal to 20";
} 
else if (number == 19) {
    description = "Number is 19";
}

else {
    description = "Number less than 20";
}

if (number >= 22) {
    description = "Number greater than or equal to 22"; }

if (number >= 23) {
    description = "Number greater than or equal to 23";}

if (number >= 24) {
     description = "Number greater than or equal to 24";}

if (number >= 25) {
     description = "Pasko na! Ibigay nyo na ang aming Christmas bonus";}



console.log(description);


// console.log(10 > 20);
//equality 
console.log("10" == 10); //true
//strict equality 
console.log("10" === 10); //false


//truthy and falsy values
//anu non zero number = truthy
//zero = falsy value
if (number) {
    console.log(number);
}

// const sample ="sample"; //truthy value
const sample = ""; //falsy value
if (sample) {
    console.log(sample); 
}

//falsy value 
// if (null) {
//     console.log("null");
// }

// if (undefined) {
//     console.log("undefined");
// }

let example;
    if (example) {
        console.log("undefined");
    }

let nullValue = null;
    if (nullValue) {
        console.log("null");
    }

 //loops
 let num =0;
 //while loop
 while(num < 5) //condition
 {
//code block (mauulit na code)
console.log(++num);

 }
 /*
 0
 1
 2
 3
 4
 
 */
num = 5;
while (num > 0)
console.log(num--);

//code block
console.log(num);
num++;
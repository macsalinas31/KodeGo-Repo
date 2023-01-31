//Modern JS Parameters

//Defauls parameters
//old way
const add = (num1, num2) => {
    //condition ? true value : fasle value = ternary operator / if... else
    num2 = typeof num2 !== 'undefined' ? num2 : 0;
    return num1 + num2;
}
// console.log(add (25));


//newa way
const multiply = (num1, num2 = 5 ) => {
        return num1 * num2;

}
// console.log(multiply(99));
// console.log(multiply (99, 2));

//spread syntax
const nums = [5, 4, 3, 2, 1];
//for funstion calls
Math.min( ...nums );
// Math.mins (5, 4, 3, 3, 2, 1);
// console.log(Math.min(5, 4, 3, 2, 1));

//in array literals, creating a new array using existing array
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

const arr1 = [ ...nums1, ...nums2];
// console.log(arr1);

const arr2 = [ "a", "b", ...nums2];
// console.log(arr2);

const arr3 = [...nums1, ...nums2, 7, 8, 9];
// console.log (arr3);

//spread in object literals
//copy property from one object to another
const feline = { 
    family: "Felidae", 
    legs: 4 
};


const canine = { 
    family: "Canidae", 
    hasTail: true 
};

const dog = { ...canine, isPet: true };
// {family: "Canidae", hasTail: true, isPet: true}

const catDog = {
    ...canine,
    ...feline,
}
//{ family: "Felidae", hasTail: true, legs: 4}
// console.log(dog);
// console.log(catDog);

//Rest parameter(s)
//get all remaining arguments into an array
const getSum = (  message, ...numbers ) => {
    let sum = 0; 
    for(let n of numbers) {
        sum +=n;
    }
    console.log(message);
    return sum;
}
// console.log(getSum (1,2));
// console.log(getSum (1,2,3,4,5));
// console.log(getSum("Hello", 1,2,3,4,5,6,7))


//destructure / destructuring or // destructuring assigment

//array destructuring
const highestMMR = [ "Jason", "Jam", "Raymart" ];
//oldway
    // const gold = highestMMR[0];
    // const silver = highestMMR[1];
    // const bronze = highestMMR[2];

//new way
//array destructuring
const [ gold, silver, bronze ] = highestMMR; 
// console.log(gold, silver, bronze);

const [ highest, ...everyoneElse ] = highestMMR
console.log(highest);
console.log(everyoneElse);

//object desturing
    //kung nao yung property name, dapat yun din ang variable
const person = {
    firstName: "Bruce",
    lastName: "Wayne",
    city: "Gotham City",
    title: "Batman"
}

// person.firstName

// const firstName = person.firstName;
// const lastName = person.lastName;
// const city = person.city;

const { city, firstName: fName, lastName: lName, title } = person; 
    // console.log(fName);
    // console.log(lName);
    // console.log(city);
    // console.log(title);

//parameter destructuring 
// const getFullName = (object) => {
//     return `${object.firstName} ${object.lastName}`
// }

const getFullName = ( {firstName, lastName}) => {
    return `${firstName} ${lastName}`
}  
console.log (getFullName(person) );



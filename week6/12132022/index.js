//objects
//an entity with properties and behavior

//object literal
//key-value pair
//property: value

const person = {
    firstName: "Juan",
    lastName: "Dela Cruz",
    age: 29,
    gender: "Male"
}

// console.log(person["firstName"]); hindi masyadong ginagamit

//dot notation
//object.propertyName
console.log(person.firstName);
console.log(person.lastName);

// console.log( `${person.firstName} ${person.lastName}` );

person.isAdmin = true;
person.firstName = "John" ;


// console.log(person);

//object instance
const person2 = new Object();
// const person2 = {};
person2.firstName = "Steve",
person2.lastname = "Rogers",
person2.isAdmin = true;

delete person2.isAdmin;

// console.log(person2);

// Object constrcutor
//PascalCase
//function declaration
function Car( color, brand, model, year, sound ) {
    //this - refers to current object
    this.color = color;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.start = function() {
        console.log(sound);
    }
}

const vios = new Car( "Black", "Toyota", "Vios", "2019", "Vroom" );
    // console.log( vios.color );
    // vios.start();

const mirage = new Car( "red", "Mitsubishi", "Mirage", "2021", "Skrrt skrrt" );
    // mirage.start();


//
const student = {

    firstName: "Andres",
    middleName: "Boni",
    lastName: "Bonifacio",
    grade: 99,
    hobby: ["reading", "sleeping", "gaming"],
    name: {
        fName: "Andres",
        lName: "Bonifacio",
    }
}

console.log( student.name.fName, student.name.lName );
// console.log( student.hobby[0]);

//for loof or for...of - used for array
//element of array
for (hobby of student.hobby) {
    
    console.log(hobby);
}

//for .. in
//[roperty in student]
for ( property in student ) {
    console.log( `${property}: ${student[property]}` );
}

//for ..in w/ array
for(key in student.hobby) {
    console.log(student.hobby[key]);
}



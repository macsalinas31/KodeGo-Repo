// Javascript class example
        //object oriented programming (OOP)

    //Abstraction
    //Enscapsulation
    //Polymorphism
    //Inheritance - in-between classes (child)

    //uses PascalCase convention or classes
class Vehicle {
    //automatically runs when a new instance is created
    constructor (color) {
        console.log(`The vehicle is ${color}`);
    }
    getEngine () {
        return 'Gas Powered';
    }
}
// const civic = new Vehicle ("Yellow");
// console.log( civic.getEngine() );

// class Toyota extends Vehicle {
//     displayTYpe() {
//         console.log('SUV')
//     }
// }

// const fortuner = new Toyota('Black');
// console.log( fortuner.getEngine() );
// fortuner.displayTYpe();

// class Nissan extends Vehicle {
//     displayType () {
//         console.log('4x4')
//     }
// }

// const frontier = new Nissan('Silver');
// console.log( frontier.getEngine());
// frontier.displayType();

// class Tesla extends Vehicle {
//     getEngine () {
//         return 'Electric Powered';
//     }
//     displayType() {
//         console.log('Sedan')
//     }
// }

// const cybertruck =  new Tesla('White');
// console.log(cybertruck.getEngine ());
// cybertruck.displayType();

class Car {
    constructor(brand, model, color, year) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;

        //built in object to get the current date
        const currentYear = new Date().getFullYear();
        this.carAge = currentYear -parseInt( this.year);
    }
    getBrandModel() {
        return `${this.brand} ${this.model}`
    }
    getCarAge() {
        return `This ${this.brand} is ${this.carAge} year(s) old`;
    }
    getColor() {
        return this.color;
    }
}

class chidlCar extends Car {
    constructor(brand, model, color, year) {
        super(brand, model, color, year)
        console.log('The Child Class');
    }
    getColor () {
        const color = super.getColor()
        return color;
     }
}

const vios = new chidlCar( "Toyota", "Vios", "Wine Red", "2020" );
console.log(vios.getBrandModel() );
console.log(vios.getCarAge() );
console.log(vios.getColor() );
console.log(vios)
let num1 = 1;
let printValue;
num1 = 21;

if (num1 > 10 && num1 < 20) {
    printValue = "The value of num1 is greater that 10 and less than 20";
}
else if (num1 == 10 || num1 ==21) {
    printValue = "The value of num1 is equal to 10 or equal to 21";

}
else if (num1 > 5) {
    printValue = "The value of num1 is greater than 5"
}
else {
    printValue = "The value of num1 is less than 10";
}
console.log(printValue);

let printStatus;
const age = 16;
if(age >= 18) {
    printStatus = "Approved";
}
else {
    printStatus = "Disapproved";   
}
// ternary operator ?
// (condition) ? {value if true} : {value is false};
printStatus = (age >= 18) ? "Approved" : "Disapproved";

console.log(printStatus);


let hourOfDay = new Date().getHours();
let greeting;

if (hourOfDay >= 4 && hourOfDay < 12) {
    greeting = "Good Morning!";
}

else if (hourOfDay >= 12 && hourOfDay <= 18) {
    greeting = "Good Afternoon!";
}
else {
    greeting = "Awoooooo! Gabi ng Lagim!";
}

console.log(hourOfDay);
console.log(greeting);

const day = "Friday";

switch(day) {

    case "Monday":
        console.log("Today is Monday");
        break;

    case "Friday":
        console.log("Happy Weekend!");


    default:
        console.log("Today is unknow") }

        //loop

        let result = '';
        let i = 0;
        do {
            i = i + 1;
            result = result + i;
        } while (i < 5);

        console.log(result);

        //loop example
//while // do...while // for loop
        let num = 0;

        // while (num < 10) { //condition
        //     console.log(num);
        //     num++; //increment
        // }

        // num = 10;
        // do {
        //     console.log(num);
        //     num++;
        // } 
        // while (num <  10);


        // 3 part separaeted by semicolon (;) 
        //(initialization; condition ; post-loop operation)

        for (let i = 0; i < 30; i++) {
            if (i % 3 ==0) {
            console.log(i);
            }
        }
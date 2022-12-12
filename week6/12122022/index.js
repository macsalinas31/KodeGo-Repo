//array > store multiple items under 1 variables (called array elements) - parang drawer ng damit - may different container or box
// pag gamit ng square bracker - array loteral
const fruits = [ "apple", "orange", "papaya", "grapes" ]; //string yung apple // kada isang item merong index //
// index start at 0 (first item lagi ang 0) 
//max index = total number of items -1

// console.log(fruits);
//arrayName[<index>]
// console.log( fruits[0] ); 

//empty array
// const prutas = [];
const prutas = new Array();
//pwedeng mapalitan ang value kung magaassign ng iba
prutas[0] = "langka";
prutas[1] = "pineapple";
prutas[2] = "gutyabano";
// prutas[0] = "manga"

// add item at end of the aarray
prutas.push("pomelo", "calamansi")
// console.log(prutas);

const scores = [50, 37.5, 99, 100];

for (let i = 0; i < scores.length; i++) {
        console.log( scores[i] );
}

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
let sum = 0;



// //callback function: functiosn used as arguments
// numbers.forEach(  

//         ( number ) => {
//            sum += number;
//         }
//  ); //foreach ay para lamang sa mga array

// console.log(sum);

// const months =  [" January", "February", "March", "April" ];
//         months.forEach (
//             ( index, elements ) => {
//                 // console.log ( `Index: ${index} - ${elements}`);

//             }
//         );
// //add item at the end of the array (array.push)

// months.push("May");
// console.log(months);

// //array.pop - remove item sa array, returh the removed item
// console.log( months.pop() );
// console.log( months );

// //shift () and unshift ()

// months.unshift("First"); // add item sa unahan
// console.log(months.shift()); //renmoved sa first item lang
// console.log(months);

//array.splice - sa gitna naman iremove , pwede add, remove, replace sa kahit anung lugar sa array
//splice(start/index kung san magstart/,deleteCount ilan ang idelete mukla sa start/,item(s) )

console.log(numbers);

//insert at index 5
numbers.splice(5, 0, 12);
console.log(numbers)
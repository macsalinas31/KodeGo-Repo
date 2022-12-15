//JavaScript Core Object

//string (``)("")
const fullName = "Firstname Lastname";
//string.length property
// console.log( fullName.length );

const sentence = "The quick brown fox jumps over the lazy dog";
//split method - paghihiwalyin yung string - returns an array
//split (separatir and limit)
const sentenceSplit = sentence.split(" ", 3); //split sa space yung sentence/character
// console.log(sentenceSplit);
const sentenceChars = sentence.split("");
// console.log(sentenceChars);
const sentenceCopy = sentence.split();
// console.log(sentenceCopy);

//slice method - kukuha ng isang section sa string at sasabhin kung sa magstart at minsa kung saan mag end
//slice(indeStart, indexEnd)
// console.log(sentence[31]) // once space counted as character
const slice1 = sentence.slice(26);
// console.log(slice1);
const slice2 = sentence.slice(4, 19)
// console.log(sentence[4])
// console.log(slice2);
const slice3 = sentence.slice(-5);
// console.log(slice3);

//indexOf method
//indexOf(substring, position)
const index1 = sentence.indexOf( "jumps", 21 );
// console.log(index1);

//lastIndexOf
const lastIndex = sentence.lastIndexOf( "dog" );
// console.log(lastIndex);

//search method
    //search(regexp)
const searchIndex = sentence.search("lazy");
// console.log(searchIndex);

// substring method
    //substring(indexStart, indexEnd)
const substring1 = sentence.substring(31);
    // console.log(substring1);

//replace method
//replaced(searchString, replacement)
//replaceAll method
const replaced = sentence.replaceAll( "lazy", "sleepy" );
    // console.log(replaced);

//upper/lowercase
const upperCase = sentence.toUpperCase();
    // console.log(upperCase);

const lowerCase = sentence.toLowerCase();
    // console.log(lowerCase);

//user input
const newString = "                 This is a new string                    ";
    console.log(newString);
//trim method -- lahatng space sa unahan at dulo ay tatanggalin
const trimString = newString.trim();
    console.log(trimString);

// Number
const myNumber = 5.146;
//     console.log(myNumber);
// //toString method
// console.log( myNumber.toString () );
// //toFixed method
// console.log(myNumber.toFixed (2))
const numString = "20";
// console.log ( Number(numString) );
//Number.isInteger() method
// console.log( Number.isInteger(numString));
//Nan means not a number
// console.log(myNumber - sentence);
// console.log( Number.isNaN (myNumber - sentence ) );


//math
console.log( Math.round(4.5) ) ;
//ceil (), ceiling, round up
console.log( Math.ceil (3.01) );
//floor()round down
console.log( Math.floor(99.99) );

//9, 3, 5, 7, 7, 1

console.log( Math.max(9, 3, 5, 7, 1) );
console.log( Math.min(9, 3, 5, 7, 1) );

//if array
const numbers = [9, 3, 5, 7, 1]
console.log(numbers)
//spread sytnax= ...array

// console.log( Math.min(...numbers) );
// console.log( Math.max(...numbers) );

const letters = ['a', 'b', 'c'];
const letters2 = ['d', 'e', 'f'];

const combined = [ ...letters, ...letters2 ];
// console.log(combined);


// using numbers array
// Find the 2nd highest value

let = [9, 3, 5, 7, 1];

numbers.sort( (a, b) => b - a);
secondHighest = numbers[1]

console.log(secondHighest)

//solution 1
/*find the highest value
get index of highest value
/*Remove the highest value from array
/* Getthe Highest  value again
*/

const sol1 = (arr) => {
        const numbers = [...arr];
        const highest = Math.max(...numbers);
        const highestIndex = numbers.indexOf(highest);
        numbers.splice(highestIndex, 1);
        const second = Math.max(...numbers);
        console.log(second);
}
sol1(numbers);

//soution 2
/** sort array in descending order
 * return the 2nd item in the sorted array
 */
const sol2 = (arr) => {
    const numbers = [...arr];
    //array.sort() method
    numbers.sort(

        (a, b) => {
            //if retunr value > 0 (positive), sort a after b

            // if return value is < 0 (negative), sort a before b

            // if return valyue is === 0, keep the original order

            // return a - b; //ascending order
            return b - a; //descending order

        }
    );
    console.log(numbers [1]);
}

sol2(numbers);


/**Solution 3
 * let highest , secondHighest
 * check every number in the array
 * if array [i] > highest, highest = array[i]
 * if array[i] < highest && array[i] > secondHighest, secondHighest = array[i]
 * return secondHighest
 */

const getSecondHighest = (arr) => {
    // let highest = -1; or 
    let highest = Number.MIN_VALUE;
    // let secondHighest = -1; or
    let secondHighest = Number.MIN_VALUE;

    for (let i = 0; i < arr.length; i++) {
        if( arr[1] > highest) {
            secondHighest = highest;
            highest = arr[i];
        }
        else if ( arr[i] > secondHighest && arr[i] < highest) {
            secondHighest = arr[i];
        }
    }
    console.log(secondHighest);
}

getSecondHighest(numbers);
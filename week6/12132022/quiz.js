// //1.
// let i = 3

// while (i) {
//     alert( i-- );
//     console.log(i);
// }



//2.
// let i = 0
// while (++i < 5 ) alert( i );
// console.log(i)


// let i = 0
// while ( i++ < 5 ) alert ( i );
// console.log(i);

//3. 
// for (let i = 0; i < 5; i++) 
//     alert ( i ) 

// for (let i = 0; i < 5; ++i) alert( i );

//4.
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!`);
//     console.log( i );

// }

// let i = 0;
// while (i < 3) {
//     alert( `number ${i}!`, i++);
//     console.log(i);
// }

//5.

// let number;

// do {
//   number = prompt("Please enter a number greater than 100", "");
// } while (number <= 100 && number !== null); //&& combined 2 condition

//6.

// for (let i = 1; i <= 8; i++ ) {
//     let output = "";
//     for (let a = 1; a <= i; a++) {
//         output += `${a}`;
//     }
//     console.log(output);
// }

//7.

// let  num = prompt("Enter a number greater than 100"); 
function printPrimes(n) {
    for (let i = 2; i <= n; i++) {
      let isPrime = true;
  
      // check if i is evenly divisible by any number from 2 to i - 1
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
        }
      }
  
      // output i if it is prime
      if (isPrime) {
       
        console.log(i);
      }
    }
    
  }
  printPrimes(10);
  //8.
//   const letters_array = ['a', 'b', 'c', 'd'];

//   letters_array.reverse();
  
//   console.log(letters_array);

  //9.
  function fizzBuzz(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push('FizzBuzz');
      } else if (i % 3 === 0) {
        result.push('Fizz');
      } else if (i % 5 === 0) {
        result.push('Buzz');
      } else {
        result.push(i.toString());
      }
    }
    return result;
  }

  const n = 15;
  const result = fizzBuzz(n);
  
  console.log(result);
  // Output: [
  //   "1", "2", "Fizz",
  //   "4", "Buzz", "Fizz",
  //   "7", "8", "Fizz",
  //   "Buzz", "11", "Fizz",
  //   "13", "14", "FizzBuzz"
  // ]
  
  
  
  
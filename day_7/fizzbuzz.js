//Create a file named `fizzbuzz.js` and within that file, write a program that logs the numbers from 1 to 100 with the following rules:
//* For any number that is a multiple of 3, log 'Fizz'
//* For any number that is a multiple of 5, log 'Buzz'
//* For any number that is a multiple of both 3 and 5, log 'FizzBuzz'
//* For all other numbers, log the number.

//psuedocode pre-work:
//create an array that logs numbers 1 to 100
//create if else conditions for above rules
//push results of if else conditions into new Array
//log new array

var fizzbuzz = new Array(100);
for (var i = 0; i < 100; i++) {
  fizzbuzz[i] = i + 1;
} //initialize and fill array
//console.log(fizzbuzz.toString());
//log array to check work
var fizzbuzzArray = new Array();
//create empty array for for function to fill
for (var i = 1; i < 100; i++) {
    fizzbuzz[i] = i + 1;
    if (i % 3 == 0 && i % 5 == 0) {
      fizzbuzzArray.push("FizzBuzz");
    }
    else if (i % 5 == 0) {
      fizzbuzzArray.push("Buzz");
    }
    else if (i % 3 == 0) {
      fizzbuzzArray.push("Fizz");
    }
    else {
      fizzbuzzArray.push(i);
    }
  }
//push altered values into new array
console.log(fizzbuzzArray);
//log final array

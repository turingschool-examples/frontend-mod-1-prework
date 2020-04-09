// ## FizzBuzz
/*
*Create a file named `fizzbuzz.js` and within that file, write a program that logs the numbers from 1 to 100 with the following rules:
* For any number that is a multiple of 3, log 'Fizz'
* For any number that is a multiple of 5, log 'Buzz'
* For any number that is a multiple of both 3 and 5, log 'FizzBuzz'
* For all other numbers, log the number.
*/
// The output of you program will look something like this:
// ```
// => 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, ..., 98, Fizz, Buzz
// ```





for (var i = 1; i <= 99; i++) {
  if ((i % 3 == 0) && (i % 5 == 0)) {
    console.log("FizzBuzz");
  }
  else if (i % 3 == 0) {
    console.log("Fizz");
  }
  else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
};
console.log(i);  // I know this comes out log each number on a different row but I wasn't sure the syntax
// I would use to combine the output to an array.

// ### Bonus
// Can you write the program so that it will run for any range of numbers?


/* Again I would like to come back to this once I have had more time to think about it. I realize I'l need to fun a
function and declare two numerical variables*/

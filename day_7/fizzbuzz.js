/*
Instructions:

Create a file named fizzbuzz.js and within that file, write a program that logs
the numbers from 1 to 100 with the following rules:

For any number that is a multiple of 3, log 'Fizz'
For any number that is a multiple of 5, log 'Buzz'
For any number that is a multiple of both 3 and 5, log 'FizzBuzz'
For all other numbers, log the number

*/

function fizzBuzz (lowNum, highNum) {
  for (lowNum; lowNum <= highNum; lowNum++) {
    num3 = lowNum / 3;
    num5 = lowNum / 5;
    if (Number.isInteger(num3) === true && Number.isInteger(num5) === true) {
      console.log("FizzBuzz");
    } else if (Number.isInteger(num3) === true && Number.isInteger(num5) === false){
      console.log("Fizz");
    } else if (Number.isInteger(num3) === false && Number.isInteger(num5) === true){
      console.log("Buzz");
    } else {
      console.log(lowNum);
    }
  }
}

fizzBuzz (1, 100);

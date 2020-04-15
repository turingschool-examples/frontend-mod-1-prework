/*
## FizzBuzz

Create a file named `fizzbuzz.js` and within that file, write a program that logs the numbers from 1 to 100 with the following rules:
* For any number that is a multiple of 3, log 'Fizz'
* For any number that is a multiple of 5, log 'Buzz'
* For any number that is a multiple of both 3 and 5, log 'FizzBuzz'
* For all other numbers, log the number.

The output of you program will look something like this:
```
=> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, ..., 98, Fizz, Buzz
```

    ### Bonus
    Can you write the program so that it will run for any range of numbers?

*/

var fizzybuzzy = new Array(100);
  for (var i = 0; i < 100; i++) {
        fizzybuzzy[i] = i + 1;
    }
    for (var i = 0; i < fizzybuzzy.length; i++) {
      if (fizzybuzzy[i] % 3 == 0 && fizzybuzzy[i] % 5 == 0) {
        console.log("Fizzbuzz");
      } else if (fizzybuzzy[i] % 5 == 0) {
        console.log("Buzz");
      } else if (fizzybuzzy[i] % 3 == 0) {
        console.log("Fizz");
      } else {
        console.log(fizzybuzzy[i]);
      };
    }

/*
var fizzybuzzy = new Array();
  for (var i = 0; i < 100; i++) {
        fizzybuzzy[i] = i + 1;
    }
    for (var i = 0; i < fizzybuzzy.length; i++) {
      if (fizzybuzzy[i] % 3 == 0 && fizzybuzzy[i] % 5 == 0) {
        console.log("Fizzbuzz");
      } else if (fizzybuzzy[i] % 5 == 0) {
        console.log("Buzz");
      } else if (fizzybuzzy[i] % 3 == 0) {
        console.log("Fizz");
      } else {
        console.log(fizzybuzzy[i]);
      };
    }

/* bonus attempt
var range = new Array[5, 50];
  for (var i = 0; [50] <= i <= [0]; i++) {
    fizzybuzzy[i] = i + 1;
  }
  for (var i = 0; i < fizzybuzzy.length; i++) {
    if (fizzybuzzy[i] % 3 == 0 && fizzybuzzy[i] % 5 == 0) {
      console.log("Fizzbuzz");
    } else if (fizzybuzzy[i] % 5 == 0) {
      console.log("Buzz");
    } else if (fizzybuzzy[i] % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(fizzybuzzy[i]);
    };
  }
*/

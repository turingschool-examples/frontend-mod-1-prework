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

for (var i=1; i < 101; i++){//i is 1 and i counts up to 100 and stops before 101
   if (i % 15 === 0) console.log("FizzBuzz");
   //any multiple of both 5 and 3 is going to be a multiple of 15
   /* If you multiply 15 as many times as you can until you reach or exceed i and the remainder equals 0 log "FizzBuzz" to the console*/
   else if (i % 3 === 0) console.log("Fizz");
   /* If you multiply 3 as many times as you can until you reach or exceed i and the remainder equals 0 log "Fizz" to the console*/
   else if (i % 5 === 0) console.log("Buzz");
      /* If you multiply 5 as many times as you can until you reach or exceed i and the remainder equals 0 log "Buzz" to the console*/
   else console.log(i); //otherwise log i to the console
}

// Bonus: Yes, i can be declared to start at any number and the number in the loop after the comparison operator (in this case 101) can be adjusted to any number as long as it is a bigger value than i

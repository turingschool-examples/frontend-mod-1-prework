/* ## FizzBuzz

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
Can you write the program so that it will run for any range of numbers? */
var anyRange = 100
var numbers = Array.from(Array(anyRange), (_,i) => i+1);

for (var i = 0; i < numbers.length; (i++)) {
  if (numbers[i]%15 == 0) {
    console.log(numbers[i] = "FizzBuzz");
  }
  else if (numbers[i]%3 == 0) {
    console.log(numbers[i] = "Fizz");
  }
  else if (numbers[i]%5 == 0) {
    console.log(numbers[i] = "Buzz");
  }
  else{
    console.log(numbers[i]);
  };
};

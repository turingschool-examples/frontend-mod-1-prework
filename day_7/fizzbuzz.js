/*
For any number that is a multiple of 3, log 'Fizz'
For any number that is a multiple of 5, log 'Buzz'
For any number that is a multiple of both 3 and 5, log 'FizzBuzz'
For all other numbers, log the number.
*/

for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  }
  else if (i % 3 == 0) {
    console.log("Fizz");
  }
  else if (i % 5 == 0) {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
};

// Can you write the program so that it will run for any range of numbers?
// yes, all you have to do is alter the integers within the initialization & condition. For example, 500-5000

for (var i = 500; i <= 5000; i++) {
}

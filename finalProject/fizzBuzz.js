/*
log every integer between 1 and 100
if that integer is a mult of 3, log 'Fizz' instead
if that integer is a mult of 5, log 'Buzz' instead
if integer mult both 3 and 5, log 'FizzBuzz' instead
1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, ...

iterate 100 times
integer to check
  first check if mult of both
    log FizzBuzz
  then check three in separate block
    log Fizz
  then check five in separate block
    log Buzz
  otherwise
    log the integer
*/

// thinking having function take two parameters, start and end, which I can set as i and the value which i <= in the loop



function fizzBuzz(start, end) {
  var container = [];
  for (var i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      container.push('FizzBuzz');
    } else if (i % 3 === 0) {
      container.push('Fizz');
    } else if (i % 5 === 0) {
      container.push('Buzz');
    } else {
      container.push(i);
    }
  }
  return container;
}

fizzBuzz(1, 15);


// Loop through each number 1 - 100
// Set up a For loop that will evaluate each number one at a time.
    /* Use modulo operator to check for multiples of 3 and 5.
    console.log (12 % 3)
    console.log (15 % 5)
    console.log (15 % 3)
    */
//  IF eval = ( num % 3 === 0), log (msg1) => "Fizz";
//    ELSE IF eval = ( num % 5 === 0), log (msg2) => "Buzz";
//    ELSE IF eval = ( num % 3 === 0 ) && ( num % 5 === 0 ), log (msg1 + msg2) => "FizzBuzz";
//    ELSE (eval = (num % 3||5) > 0), log num.


// BONUS: make it work for ANY RANGE of numbers
// by setting (i = starting index) and (i < high end of range)

var msg1 = "Fizz";
var msg2 = "Buzz";
// var num = (i + 1);

for (var i = 55; i < 200; i++) {
  var num = (i + 1);

  if (((num % 3) == 0) && ((num % 5) !== 0)) {
    console.log(msg1);
  }

  else if (((num % 5) == 0) && ((num % 3) !== 0)) {
    console.log(msg2);
  }

  else if (((num % 3) == 0) && ((num % 5) == 0)) {
    console.log(msg1 + msg2);
  }

  else {
    console.log(num);
  };
};

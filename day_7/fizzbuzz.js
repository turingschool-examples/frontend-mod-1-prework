/*Psuedocode:
1) Loop through numbers 1-100
2) Print all numbers
3) `if` i modulo 3 strictly = 0, then print "Fizz"
4) `elseif` i modulo 5 strictly = 0, then print "Buzz"
5) `elseif` i moduloe 3&5 === 0, then print "fizzbuzz"
6) `else` print i
7) Node - test
// IDEA: running any range of numbers? would you replace `var i = 0` to var i = ()?
Or creat a new variable and submit it in ()?
*/

for(var i = 1; i <= 100; i++){
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }

  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
};

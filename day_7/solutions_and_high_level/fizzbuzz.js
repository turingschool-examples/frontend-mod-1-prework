
function fizzbuzz(start, end) {
  for (var i = start; i <= end; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz');
    } else if (i % 3 == 0) {
      console.log('Fizz');
    } else if (i % 5 == 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzbuzz(1, 100);

/*
Similar to checker_board, I encountered this problem in the end of
chapter 2 in 'Eloquent Javascript' before running into it in the capstone.
The code above is my original attempt which I wrote and tested before looking
at the solution, (except for implementing the bonus parameters
from the capstone), and it does the job just fine. The code below was how I
refactored the program after looking at the solution, which is definitely way
more succinct and efficient. Just adding all this to be totally transparent
about my process!

function fizzbuzz(start, end) {
  for (var i = start; i <= end; i++) {
    var fzBz = '';
    if (i % 3 == 0) fzBz += 'Fizz';
    if (i % 5 == 0) fzBz += 'Buzz';
    console.log(fzBz || i);
  }
}

fizzbuzz(1, 100);
*/

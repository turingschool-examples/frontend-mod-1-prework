for (var i = 1; i < 101; i++) {
  if ( i % 3 === 0 && i % 5 ===0 ) {
       console.log('FizzBuzz');
  } else if ( i % 3 === 0 ) {
      console.log('Fizz');
  } else if ( i % 5 === 0 ) {
       console.log('Buzz');
  } else {
    console.log(i);
  }
};


//Challenge

let rangeStart;
let rangeEnd;

function fizzBuzz(rangeStart, rangeEnd) {
  for (var i = rangeStart; i <= rangeEnd; i++) {
    if ( i % 3 === 0 && i % 5 ===0 ) {
       console.log('FizzBuzz');
     } else if ( i % 3 === 0 ) {
       console.log('Fizz');
     } else if ( i % 5 === 0 ) {
        console.log('Buzz');
      } else {
        console.log(i);
      }
    }
};

console.log(fizzBuzz(33, 88))

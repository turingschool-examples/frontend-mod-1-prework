for (var i = 0; i <= 100; i++) {
  if ( i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz"); }
    else if ( i % 3 === 0 ) {
      console.log("Fizz"); }
      else if ( i % 5 === 0 ) {
        console.log("Buzz"); }
        else {console.log(i);}
}

// you can use this program to run through any range of numbers by changing var i = to your beggining number and i <= to your ending number in the range.

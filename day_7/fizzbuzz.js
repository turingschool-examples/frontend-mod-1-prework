function fizzBuzz (start, end){
  var output = "";
  for (var i = start; i <= end; i++) {
    if ( ( i % 3 == 0 ) & ( i % 5 == 0 ) ) {
      output += "FizzBuzz, ";
    } else if ( i % 3 == 0 ) {
      output += "Fizz, ";
    } else if ( i % 5 == 0 ) {
      output += "Buzz, ";
    } else {
      output += i + ", ";
    }
  }
  output = output.slice( 0, ( output.length - 2 ) );
  console.log(output);
}

fizzBuzz(1,100);

//=> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, ..., 98, Fizz, Buzz

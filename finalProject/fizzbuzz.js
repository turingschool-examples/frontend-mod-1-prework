//This version takes any number and puts it into an array format.

function fizzbuzz(j) {
  var fizzArray = []
  for(var i = 1 ; i <= j ; i++){
    if( i % 3 == 0 && i % 5 == 0 ){
      fizzArray.push("FizzBuzz")
    }else if ( i % 5 == 0 ){
      fizzArray.push("Buzz")
    }else if ( i % 3 == 0 ){
      fizzArray.push("Fizz")
    } else {
      fizzArray.push(i)
    }
  }
  console.log(fizzArray)
};
fizzbuzz(100);



//This function takes any number and logs the results for each number.
/*
function fizzbuzz(j) {
  for(var i = 1 ; i <= j ; i++){
    if( i % 3 == 0 && i % 5 == 0 ){
      console.log("FizzBuzz")
    }else if ( i % 5 == 0 ){
      console.log("Buzz")
    }else if ( i % 3 == 0 ){
      console.log("Fizz")
    } else {
      console.log(i)
    }
  }
};
fizzbuzz(21);
*/


//This function takes no arguments and logs a simple 1-100 FizzBuzz list
/*
function fizzbuzz() {
  for(var i = 1 ; i <= 100 ; i++){
    if( i % 3 == 0 && i % 5 == 0 ){
      console.log("FizzBuzz")
    }else if ( i % 5 == 0 ){
      console.log("Buzz")
    }else if ( i % 3 == 0 ){
      console.log("Fizz")
    } else {
      console.log(i)
    }
  }
};
fizzbuzz();
*/

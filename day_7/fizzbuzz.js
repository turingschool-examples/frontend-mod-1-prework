function fizzBuzz(start, end){
  for ( var i = start; i <= end; i++){
    if (i % 3 == 0 && i % 5 == 0){
      console.log("FizzBuzz");
    }//Multiple of both 3 and 5 log FizzBuzz
    else if (i % 3 == 0){
      console.log("Fizz");
    }//Multiple of 3 log Fizz
    else if (i % 5 == 0){
      console.log("Buzz");
    } //Multiple of 5 log Buzz
    else{
      console.log(i);
    }//Log the number.
  }
}
fizzBuzz(1,1000)

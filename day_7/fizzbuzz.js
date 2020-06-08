function fizzBuzz(start, end) { //function with start/end parameters
  var numberString = ""; //number string where values are added
  for (var i = start; i <= end; i++) { //loop starting and ending according to parameters
    if(i % 5 == 0 && i % 3 == 0) { //if loop value is a multiple of both 3 and 5
      numberString += "FizzBuzz, "; //add "FizzBuzz, " to numberString
    } else if(i % 5 == 0) { //else if loop value is a multiple of 5
      numberString += "Buzz, "; //add "Buzz, " to numberString
    } else if(i % 3 == 0) { //else if loop value is a multiple of 3
      numberString += "Fizz, "; //add "Fizz, " to numberString
    } else {
      numberString += (i + ", "); //all othe results add the loop value and proper spacing to numberString
    };
  }console.log(numberString) //print numberString
};

fizzBuzz(1, 100) //call the function

console.log("\nBONUS QUESTION: ")
// BONUS: any range of numbers can be called into the function with `start`
// being the starting number, and `end` being the ending number.
fizzBuzz(-25, 0)

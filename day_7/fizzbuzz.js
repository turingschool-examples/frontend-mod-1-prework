var number = 1;
var highestNumber = 100;
for (number; number <= highestNumber; number++){
  if(number % 3 === 0 && number % 5 === 0){
    console.log("FizzBuzz");
  }
  else if(number % 3 === 0)
  {
    console.log("Fizz");
  }
  else if(number % 5 === 0){
    console.log("Buzz");
  }
  else{
    console.log(number);
  }
}

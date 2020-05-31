for (var i = 0; i < 101; i++ ) {

  var divideByThree = i % 3;
  var divideByFive = i % 5;

  if ((divideByThree == 0) && (divideByFive == 0))
  console.log("FizzBuzz");

  else if (divideByThree == 0)
  console.log("Fizz");

  else if (divideByFive == 0)
  console.log("Buzz");

else
  console.log(i);
}

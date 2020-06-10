// First part:
 for (var i = 1; i <= 100; i++)
  if (i % 15 == 0)
    console.log("FizzBuzz");
  else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else
      console.log(i);

//Bonus:

function fizzBuzzRange(begin, end) {
  for (var i = begin; i <= end; i++)
   if (i % 15 == 0)
     console.log("FizzBuzz");
   else if (i % 3 == 0) {
     console.log("Fizz");
   } else if (i % 5 == 0) {
     console.log("Buzz");
   } else
       console.log(i);
     };
fizzBuzzRange(50, 100);

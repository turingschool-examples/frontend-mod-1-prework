
for (var i = 1; i < 101; i ++ ) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz")
  }

    else if (i % 3 === 0) {
      console.log("Fizz");
    }

    else if (i % 5 === 0) {
      console.log("Buzz")
    }

    else {
    console.log(i)
  }
};


//### Bonus
//Can you write the program so that it will run for any range of numbers?


/*
BONUS CODE:

function fizzBuzz(num){
  for (var i = 1; i <= num; i ++ ) {
    if (i % 3 === 0 && i % 5 === 0) {
     console.log("FizzBuzz")
   }

      else if (i % 3 === 0) {
        console.log("Fizz");
      }

      else if (i % 5 === 0) {
        console.log("Buzz")
      }

      else {
      console.log(i)
      }
  }
};

fizzBuzz(200) //can input any positive number here
*/

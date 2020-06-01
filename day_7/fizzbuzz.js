
//## Fizzbuzz

for (var i = 1; i <= 100; i++){
  if (i % 15 == 0){
    console.log("Fizzbuzz");
  } else if (i % 5 == 0){
    console.log("Buzz");
  } else if (i % 3 == 0){
    console.log("Fizz");
  } else {
      console.log(i);
    }
};



//### Bonus:

function fizzbuzz(start, finish) {
  for (var i = start; i <= finish; i++){
    if (i % 15 == 0){
      console.log("Fizzbuzz");
    } else if (i % 5 == 0){
      console.log("Buzz");
    } else if (i % 3 == 0){
      console.log("Fizz");
    } else {
        console.log(i);
      }
  }
};

console.log(fizzbuzz(300, 400));


// i did it!! i think?

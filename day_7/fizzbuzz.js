var num = 100;
// By defining the variable num I can change the number and still reuse the code below

for (i=1; i<=num; i++){
  if (i % 3 == 0){
    console.log("Fizz");
  }
  else if (i % 5 == 0){
    console.log("Buzz");
  }
  else if (i % 3 == 0 && i % 5 == 0){
    console.log("FizzBuzz")
  }
  else{
    console.log(i)
  }
}

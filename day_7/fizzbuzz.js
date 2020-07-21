var num1 = 500

var num2 = 600


for(var i=num1; i<num2; i++){
  if (i%3 === 0 && i%5 === 0){
    console.log("FizzBuzz")
  }
  else if (i%3 === 0){
    console.log("Fizz")
  }
  else if (i%5 === 0){
    console.log("Buzz")
  }
  else {
    console.log(i)
  }
}

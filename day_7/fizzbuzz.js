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



///I realize now that I am totally replacing the numbers with the words stated and I am not sure if that is what you wanted.  If we wanted both the number and the word, we would console.log( i + "Fizz") or (i + "Buzz).

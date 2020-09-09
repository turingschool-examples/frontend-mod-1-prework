function fizzBuzz(startNum, endNum){
  for (i=startNum; i<=endNum; i++){
    isFizz = false
    isBuzz = false
    if (i%3 == 0){
      isFizz = true
    }
    if (i%5 == 0){
      isBuzz = true
    }
    if (isFizz == true && isBuzz == false){
      console.log("Fizz")
    }
    else if (isFizz == false && isBuzz == true){
      console.log("Buzz")
    }
    else if (isFizz == true && isBuzz == true){
      console.log("FizzBuzz")
    }else{
      console.log(i)
    }
  }
}

console.log(fizzBuzz(2, 20))

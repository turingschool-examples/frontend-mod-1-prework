var num = 100;
//By making the range a variable this loop can be reused by just changing the vaiable num.

for (i = 0; i <= num; i++){
  if ((i % 3 === 0) && (i % 5 === 0)){
    console.log("FizzBuzz");
  } else if (i % 3 === 0 ){
    console.log("Fizz");
  }else if(i % 5 === 0) {
    console.log("Buzz")
  }else{
    console.log(i);
  }
}

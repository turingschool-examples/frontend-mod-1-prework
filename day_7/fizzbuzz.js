var num = "";

/*for (i=1; i <=100; i++) {
  num = num + i;
}*/

for (i= 1; i <= 100; i++) {
  num = num + i;
  if(Number.isInteger(i / 3) && Number.isInteger(i / 5)) {
    console.log("FizzBuzz")
  }
  else if(Number.isInteger(i / 3)) {
    console.log("Fizz");
  }
  else if(Number.isInteger(i / 5)) {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
}



/*for (i=0; i <=100; i++) {
  if(Number.isInteger(i / 3)) {
    num = "Fizz";
  }
  else if(Number.isInteger(i / 5)) {
    num = "Buzz";
  }
  else if(Number.isInteger(i / 3 && i / 5)) {
    num = "FizzBuzz";
  }
  else {
    num = num + i;
  }
}*/

//console.log(num);

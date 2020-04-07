var minRange = 35;

var maxRange = 150;

for (i = minRange; i < maxRange; i ++) {
if(i % 15 === 0) {
  console.log("FizzBuzz");
}
  else if(i % 3 === 0){
    console.log("Fizz");
}
else if(i % 5 === 0) {
  console.log("Buzz");
}
else {
  console.log(i);
}
};

//This is the code for numbers 1 to 100:
for (var i = 1; i <= 100; i++) {
  if (i%3 === 0 && i%5 === 0) {
    console.log('Fizzbuzz');
  } else if (i%3 === 0) {
      console.log('Fizz');
  } else if (i%5 ===0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }

};

//This is the code for any range of numbers:
function numberList (startNumber, endNumber) {
  for (var i = startNumber; i <= endNumber; i++) {
    if (i%3 === 0 && i%5 === 0) {
      console.log('Fizzbuzz');
    } else if (i%3 === 0) {
        console.log('Fizz');
    } else if (i%5 ===0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};

//Example of calling this function:
numberList(4,175);

/* This piece of code will log the nuumber
from 1 to 100.*/
/* The way I apprached this excercise was by making sure I was
able to print the number from 1 to 100, after making this possible
with the first line of code.*/


for (var i = 1; i < 101; i++) {
  /* The way I apprached this excercise was by making sure I was
  able to print an array of numbers from 1 to 100.
*/
  if (i % 3 === 0) {
    /*I decided  to locate all the
    multiples of 3 within the array.
    if that was the case change those
    values for the word Fizz */
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
    /*With this statement
    I decided to locate all the
    multiples of 5 and then
    change those values for the word Buzz */
  } else if (i % 3 === 0 && i % 5 === 0){
    /*With this statement
    I decided to locate all the
    multiples of 3 first and the 5 and then
    change those values for the word FizzBuzz. */
    console.log("FizzBuzz");
  } else{
    console.log(i)
  }
}

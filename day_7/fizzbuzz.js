// Create a loop where the variable starts at 1 and ends at 100
//by adding 1 to the variable every time that still returns less than 100.

for (var i = 1; i < 101; i ++) {

// Create an if statement to replace the variable number with the string, "Fizzbuzz"
// if the variable is a multiple of both 3 and 5 at the same time.
// Run the variable in modulus equations of 3 and 5 where the result must be a remainder of 0
// Call and log the if string only if they are both true.

if (i%3 === 0 && i%5 === 0) {
   console.log("Fizzbuzz");
}

// Create else if statement to replace the variable number with the string, "Fizz"
// in case the if statement above is false.
// Run the variable again in a modulus equation of just 3. The result must be a remainder of 0.
// Call and log the string if it is true.
else if (i%3 === 0) {
  console.log("Fizz");
}


//Create another else if statement to replace the variable number with the string "Buzz"
// Run the variable again in a modulus equation of 5. The result must be a remainder of 0.
// Call and log the string if it is true.
else if (i%5 === 0) {
  console.log("Buzz");
}

// If all condition statements above have been run and are false,
// call and log the number value of the variable.


else {
  console.log(i);
}
}

// Bonus
// To make the program run for any range of numbers, you need to change "1" and "100" in the initial loop code block to the new starting number and the new ending number.

// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// Declares the function "buildABear" with the parameters: age,fur,clothes, specialPower
function buildABear(name, age, fur, clothes, specialPower) {
//delares the variables "greeting" which is a string using interpolation including the "name" argument
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
//declares "demographics" as an array
  var demographics = [name, age];
//declares powerSaying a string that concatenation of a string and specialPower
  var powerSaying = "Did you know that I can " + specialPower + " ?";
//declares the object "builtBear" as a variable for the buildABear function
  var builtBear = {
//assigns key value pairs for the builtBear  with the above variables
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };
//prints the builtBear object key value pairs
  return builtBear
}
//calls the function buildABear with the name: Fluffy, age: 4, fur: brown, clothes: pants and jorts? (lol) with a tanktop
// Its specialPower is giving nightmares
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
//calls the function buildABear with name: sleepy, fur: purple, clothes: pajamas and sleeping cap
// and has the specail power of sleeping in
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//Declares function fizzBuzz with three parameters
function fizzBuzz(num1, num2, range) {
//Declares a loop that will run as long as the variable "i" is less than or eqaul the specified range.
//the variable will increase by "1" for each time the interpreter passes through
  for (var i = 0; i <= range; i++) {
// conditional statement confirming if the variable "i" and the arguments passed through result in an integer for both
    if (i % num1 === 0 && i % num2 === 0) {
// it will log "fizzBuzz" to the console and start the loop over
      console.log('fizzbuzz');
// if the above is false, then it will check if just num1 is an integer
    } else if (i % num1 === 0) {
// it will log "fizz" to the console and start over
      console.log('fizz');
// if the above is false, then it will check if num2 is an integer
    } else if (i % num2 === 0) {
// which will log "buzz" to the console and start over
      console.log('buzz');
// if above is false
    } else {
// then it will print the current number of the loop
      console.log(i);
    }
  }
}
//calls the function with the arguments 3, 5, 100
fizzBuzz(3, 5, 100);
//calls the function with the argumets 5, 8, 400
fizzBuzz(5, 8, 400);

//Build a Bear

//This is a function with 5 parameters, (name, age, fur, clothes, specialPower)
function buildABear(name, age, fur, clothes, specialPower) {
//Declare variable of "greeting", value is a template string having an
//expression with placeholder "name"
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
//Declare a variable having value being an array with two
//elements
  var demographics = [name, age];
//Declare variable "powerSaying" and concatenate specialPower to make an expression
  var powerSaying = "Did you know that I can " + specialPower + " ?";

//Create a new object called "builtBear" and have the following key and value pair; basicInfo = array, clothes = array, exterior = string, cost = integer, sayings = array, isCuddly = bollean
  var builtBear = {

    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };

  return builtBear
}

// call on function with following arguments; name = string, age = integer, fur = string, clothes = array, special power = string

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');


// create a function called fizzBuzz with the following arguments (num1, num2, range)
//FizzBuzz
function fizzBuzz(num1, num2, range) {
  // make a for loop to print out the following words; "fizzbuzz", "fizz", "buzz"
  for (var i = 0; i <= range; i++) {
    // print fizzbuzz if the current iteration divided by num1 and num2 is equal to 0 without a remainder

    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
    } else if (i % num1 === 0) {
      // print fizz if the current iteration is divided by num1 and result is equal to 0
      console.log('fizz');
    } else if (i % num2 === 0) {
      // print buzz if the current iteration is divided by num2 without a remainder and is equal to 0
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

// Invoke the function fizzBuzz twice
fizzBuzz(3, 5, 100);
fizzbuzz(5, 8, 400);

//Finished!

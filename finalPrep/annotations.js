// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) {
  // create function called buildABear with arguments name, age, fur, clothes, and SpecialPower
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // assign a string to var greeting including dynamic name value
  var demographics = [name, age];
  // assign array of name and age to var demographics
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // assign string to var powerSaying including dynamic specialPower value
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };
  // create object with keys basicInfo, clothes, exterior, cost, sayings, & isCuddly
  return builtBear
} // return defined builtBear object w/ values

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');
// make two instances of buildABear object with individualized values


//FizzBuzz
function fizzBuzz(num1, num2, range) {
  // create function FizzBuzz with 3 variables: num1, num2, and range
  for (var i = 0; i <= range; i++) {
    // create loop starting at 0 which increments up until and including number defined by range
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
      // if remainder of num1 divided by i equals 0 AND remainder of num2 divided by i equals 0,
      // log 'fizzbuzz' to console
    } else if (i % num1 === 0) {
      console.log('fizz');
      // if both conditions are not met but the remainder of num1 divided by i is 0,
      // log 'fizz' to console
    } else if (i % num2 === 0) {
      console.log('buzz');
      // if remainder of num1 is not 0, but remainder of num2 is 0, log 'buzz' to console
    } else {
      console.log(i);
      // if neither condition is met, log value of i to console
    }
  }
}

fizzBuzz(3, 5, 100);
  // end result logs all numbers which cannot be divided between num1 and num2 to console.
  // In this case, all numbers between 1 and 100 are accounted for.
  // Numbers which can be divided by either num1, num2, or both are logged as "fizz", "buzz", or "fizzbuzz"

//fizzbuzz(5, 8, 400);
  // This above instance fails due to a capitalization error. Rather than camelCase, both words are lowercase.
  // Instance has been commented out due to error. Below is the corrected version.

fizzBuzz(5, 8, 400);

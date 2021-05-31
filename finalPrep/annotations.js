// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//This is a function with 5 parameters, (name, age, fur, clothes, specialPower)
function buildABear(name, age, fur, clothes, specialPower) {
//Declare variable of "greeting", value is a template string having an
//expression with placeholder "name"
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
//Declare a variable having value being an array with two
//elements
  var demographics = [name, age];
//Declare variable "powerSaying"
  var powerSaying = "Did you know that I can " + specialPower + " ?";

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

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
function fizzBuzz(num1, num2, range) {
  for (var i = 0; i <= range; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
    } else if (i % num1 === 0) {
      console.log('fizz');
    } else if (i % num2 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(3, 5, 100);
fizzbuzz(5, 8, 400);

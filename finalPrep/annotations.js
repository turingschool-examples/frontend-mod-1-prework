// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//Make a function called buildABear that takes in 5 arguments: name, age, fur, clothes, specialPower.
function buildABear(name, age, fur, clothes, specialPower) {
  //create var greeting that uses interpolation in a greeting using the name.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //create variable demographics that equals the name and age.
  var demographics = [name, age];
  // create variable powerSaying and usese concatenation with specialPower.
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // create variable object builtBear.
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
//create two instances of buildABear
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//Create a funciton that takes three arguments (num1, num2, range)
function fizzBuzz(num1, num2, range) {
  //create a for loop that stops at range.
  for (var i = 0; i <= range; i++) {
    //create if statement that prints fizzbuzz if i modulous num1 and num2 both equal 0.
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
      //create if statement that prints fizz if just i modulous num1 = 0
    } else if (i % num1 === 0) {
      console.log('fizz');
      //create if statement tha prints buzz if just i modulous num2 = 0
    } else if (i % num2 === 0) {
      console.log('buzz');
      //create else statement to print i for everything else.
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(3, 5, 100);
fizzbuzz(5, 8, 400);

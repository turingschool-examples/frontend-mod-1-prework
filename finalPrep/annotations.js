// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear

//Declares the function buildABear with the parameters name, age, fur, clothes, specialPower.
function buildABear(name, age, fur, clothes, specialPower) {
//Declares the variable greeting with the string data, interpolated with the name parameter)
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`
//Declares the variable demographics with array
  var demographics = [name, age]
//Declares variable powerSaying as a string using concatenation with specialPower parameter
  var powerSaying = "Did you know that I can " + specialPower + " ?"
//Declares an object literal to store info about variable builtBear
  var builtBear = {
//key is basicInfo with a dynamic value of the demographics parameter. Will return as an array of name and age.
    basicInfo: demographics,
//key is clothes with a dynamic value of clothes parameter (string)
    clothes: clothes,
//key is exerior with a dynamic value of fur parameter returned (string)
    exterior: fur,
//key is cost with a static value of 49.99
    cost: 49.99,
//key is sayings with both static and dynamic array values
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
//key is isCuddly with a static boolean value of true
    isCuddly: true,
  }
//stops the execution of the function and returns the output of builtBear variable
  return builtBear
}
//Passes arguments through buildABear function in order of their parameters (or indexes)
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares')
//Passes another argument through the same function with different data
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in')
console.log(builtBear);

//FizzBuzz
//Declares function fizzBuzz with 3 parameters
function fizzBuzz(num1, num2, range) {
//Declares a loop using the for keyword. i=0 is starting point, i <= range is the condition, with increment increase of 1.
  for (var i = 0; i <= range; i++) {
//adds if else conditional statement for the loop
    if (i % num1 === 0 && i % num2 === 0) {
//gives action to log the string "fizzbuzz" if condition above logs true in loop
      console.log('fizzbuzz')
//gives another condition to evaluate and log "fizz" if true
    } else if (i % num1 === 0) {
      console.log('fizz')
  //gives another conidtional to evaluate and log "buzz" if true
    } else if (i % num2 === 0) {
      console.log('buzz')
  //if all other conditionals return falsy, log the value of i in the loop
    } else {
      console.log(i)
    }
  }
}
//passes the values 3, 5, 100 through the parameters num1, num2 and range, respectively. Of the function fizzBuzz
fizzBuzz(3, 5, 100)
//this returns an error, since fizzbuzz has not been definded. this was sneaky! good thing we run our code :)
fizzbuzz(5, 8, 400)

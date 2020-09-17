/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

//-------------------
// PART 1: Function Syntax
//-------------------

// EXAMPLE: Write a function below that, when called will log "Severus Snape" to the console
function printName() {
  console.log("Severus Snape");
};

printName();
printName();
printName();
printName();
// Since the function was called 4 times, "Severus Snape" will log 4 times.


// YOU DO: Write a function named sayHello that logs to the console "Oh, Hello!"
// Then, call the function 2 times.
function sayHi() {
  console.log(`Oh, Hello!`);
}

sayHi();
sayHi();

//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.
function greetMe(name) {
  console.log(`sup ${name}`);
}

greetMe('nerd');
greetMe('Kreia');
greetMe('Mew');

// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.
function sum(num1. num2) {
  return num1 + num2;
}

sum(4, 6);
sum(54, 45621);
sum(0, -4);

// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.
function loyalty(girl1, girl2) {
  return `${girl1} and ${girl2} are the only anime waifus worth mentioning.`
}

loyalty('Emilia', 'Rem');
loyalty('Ahri', 'Riven');
loyalty('Asuna', 'Sinon');

//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:
I named the function loyalty as, in the anime and gaming communities, you pick your best girl and stick with her as the waifu of choice.
The irony is the function asks for two!

I named each parameter girl1 and girl2 so that it's clear what the function is asking for.


*/

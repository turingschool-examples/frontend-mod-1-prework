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

function sayHello() {
  console.log('Oh, Hello!');
};

sayHello();
sayHello();

//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.

function greetMe(name) {
   console.log(name);
};

greetMe('Harim')
greetMe('Alfie')
greetMe('Babette')

// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.

function numbers(a, b) {
  console.log( a + b);
};

numbers(2, 3);
numbers(80, 20);
numbers(5, 5);


// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

function concatenateStrings(string1, string2) {
  console.log( string1 + ', ' + string2 + ' and all that jazz.');
};

concatenateStrings('Dancing', 'drinking');


//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:

I named the function concatenateStrings because that tells me exactly the action the function performs. I named the parameters string1 and string2, because that also is a perfect description of them (in case I need to look at this code later and I haven't made good comments, I can still figure it out easily based on just the function) and also because it's vaguely Dr.Suess Thing 1 and Thing 2. I'm not trying to make things super long, since I have to retype them, but the clarity longterm is worth a few extra keystrokes since I'm only calling this function once.

*/

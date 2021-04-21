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
function printGreeting() {
  console.log("Oh, Hello!");
};

printGreeting();
printGreeting();

//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.

var name = ("Josh")

function greetMe() {
  console.log("Hello, " + name + "!");
}

greetMe ();

name = ("Bethany");

greetMe ();

name = ("Yam"); //This is the name of one of my stuffed rabbits!

greetMe ();

// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.

var num1 = 1;
var num2 = 2;

function addNums (num1, num2) {
  console.log(num1 + num2); //This failed multiple times - I forgot the parentheses!
}

addNums (1, 2);
addNums (3, 4);
addNums (5, 6);

// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

var spouse1 = ("Josh");
var spouse2 = ("Bethany");

function inLove (spouse1, spouse2) {
  console.log(spouse1 + " and " + spouse2 + " are the best couple in the world!");
}

inLove (spouse1, spouse2);

//Something felt off about this one, but I can't put my finger on it.
//Please let me know if I missed something here!


//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:

(Sorry for the mushy function! I've just really appreciated my wife lately.)
I named the function "inLove" after initially naming it "bestFriends". I think it's cute
that Bethany and I are still best friends after being married for 3 years; but if another
person were to read the code, "bestFriends" would be a confusing function name.

I named the parameters "spouse1" and "spouse2" to indicate that we're married, though
that would still limit the scope of the function if the variables were to be changed.
In a practical context I would likely either name the function something more marriage-specific,
or simply omit the marriage factor from the function altogether and just make it about friendship.

I don't know, I just wanted to have fun with this one. I understand the importance of
naming conventions!

*/

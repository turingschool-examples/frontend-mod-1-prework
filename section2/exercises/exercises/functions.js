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

// EXAMPLE: Write a function below that, when called, will log "Severus Snape" to the console
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
  console.log("Oh, Hello!");

};

sayHello();
sayHello();

//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.
function greetMe(name){
  console.log(name);
}

greetMe("Sam");
greetMe("Chris");
greetMe("Chloe");

// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.
function addMe(firstNumber, secondNumber){
  console.log(firstNumber + secondNumber);
}

addMe(2, 3);
addMe(4, 5);
addMe(6, 7);

// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.
function concatMe(firstString, secondString){
  console.log(firstString + secondString);
}

concatMe("Hello, ", "you!");
//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:
I named the function concatMe because its a shortened version of concatenation and it kept with
the earlier theme of "me," where me stood for the parameters of previous functions. Concat is also
fun to say, and, even though its an odd snippet, I don't think its very difficult to remember
since it stands in for the larger word "concatenation."

I named my parameters firstString and secondString because it seemed the most straightforward in
terms of meaning: firstString should come before secondString to make the concatenated product
legible. I initially made them string1 and string2 but felt like the integers at the end may
violate some convention I may not know about yet. I also thought about stringOne and stringTwo,
but I didn't like that.

*/

/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

node section3/exercises/loops.js

Make sure to run the file with node in your command line.
*/

//-------------------
// LEVEL 1: Loops
//-------------------

// EXAMPLE: Write code that logs to the console "I love hedgehogs!" 9 times:
for (var i = 0; i < 9; i++) {
  console.log("I love hedgehogs!");
}

// EXAMPLE: Write code that logs to the console the value of `i`, 3 times:
for (var i = 0; i < 3; i++) {
  console.log("i");
}

// What is logged to the console for this second example? Why?
// EXPLAIN: What is logged is the code to execute the loop, which is "i"
//repeated three times.
//Its output is a result of the initialization, where a variable is created, a
//condition is established
//telling the console to run until the counter value (3) is met. The update
//adds one to the counter after the code executes.

//X
 // YOU DO: Write code below that logs to the console, the sum of 2 plus 2, 7 times:
for (var i = 0; i < 7; i++){
    console.log(2 + 2);
}
//X
 // YOU DO: Write code below that logs the String 'She sells seashells down by the seashore'
 // 10 times.
for (var i = 0; i < 10; i++){
  console.log("She sells seashells down by the seashore")
}
//???
//-------------------
// LEVEL 2: An Added Layer of Challenge
//-------------------

// YOU DO: Write code below that logs to the console a String of "This is loop number: "
//that concatenates with `i`.
for (var i = 0; i < 1; i++){
    console.log("This is loop number:")
}




//X
// YOU DO: Using a for loop, how could you get an output that looks like this:
for (var i = 10; i < 10; i++){
    console.log(10, 9, 8, 7, 6, 5, 4, 3, 2, 1,)
}


// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

// Not sure? Try to google some terms that seem relevant. Play around with it. Don't spend
// more than 15 minutes without making progress. If you are at 15 minutes and haven't made
// progress, that means it's time to reach out to your pre-work group on Slack!
//All done!

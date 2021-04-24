/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

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
  console.log(i);
}

// What is logged to the console for this second example? Why?
// EXPLAIN:
// It will log each integer from 0 to 2.
// i is set to 0, which will be its starting point. The limit, as defined by the second
// set of parameters, is 3; and "i++" instructs the computer to repeat the process on
// each index value up until that limit.

 // YOU DO: Write code below that logs to the console, the sum of 2 plus 2, 7 times:
for (i = 0; i < 7; i++) {
  console.log(2 + 2);
}

 // YOU DO: Write code below that logs the String 'She sells seashells down by the seashore'
 // 10 times.
for (i = 1; i <= 10; i++) {
  console.log("She sells seashells down by the seashore.");
}

//-------------------
// LEVEL 2: An Added Layer of Challenge
//-------------------

// YOU DO: Write code below that logs to the console a String of "This is loop number: "
//that concatenates with `i`.
for (i = 1; i < 2; i++) {
  console.log("This is loop number: " + i);
}

// YOU DO: Using a for loop, how could you get an output that looks like this:

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

for (i = 10; i >= 1; i--) {
  console.log(i);
}
//Psh, give me a real challenge! (...I'm going to regret saying that, aren't I?)

// Not sure? Try to google some terms that seem relevant. Play around with it. Don't spend
// more than 15 minutes without making progress. If you are at 15 minutes and haven't made
// progress, that means it's time to reach out to your pre-work group on Slack!

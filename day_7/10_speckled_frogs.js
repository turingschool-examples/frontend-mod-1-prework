/*
Create a file named 10_speckled_frogs.js and within that file, write several a
program that will print the following nursery rhyme:

3 speckled frogs sat on a log eating some most delicious bugs.
One jumped in the pool where its nice and cool, then there were 2 speckled frogs.

2 speckled frogs sat on a log eating some most delicious bugs.
One jumped in the pool where its nice and cool,
then there was 1 speckled frog.

1 speckled frog sat on a log eating some most delicious bugs.
One jumped in the pool where its nice and cool,
then there were no more speckled frogs!
*/

/*

Combining the first and second assignment extensions seemed like quite a task. I found downloadable extensions and
function code snippets that could do the conversions for me, but it seemed outside of the scope
of this task even as assignment extensions. I compromised by combining the extensions (any number
of frogs and written word numbers for first and fourth line) but only up to 10 frogs.

I couldn't figure out how to create text numbers without copying a third party script to do so.
So I made an array up to "Ten" to pull from. I also added something to tell you you can only have
up to ten frogs if you enter more than 10. I also added a separate block to run specific Instructions
if you enter "2" because otherweise my for loop wouldn't catch it and there wouldn't be text numbers in
my first line.

*/

function speckledFrog (frogs) {

var firstLine = frogs.toString();
var numberStrings = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];


  if (frogs === 2) {
        console.log("Two speckled frogs sat on a log eating some most delicious bugs. \nOne \
jumped in the pool where it's nice and cool, \nthen there was One speckled frog.\n")
        console.log("1 speckled frog sat on a log eating some most delicious bugs. \nOne \
jumped in the pool where it's nice and cool, \nthen there were no more speckled frogs!\n")
  } else if (frogs <= 10) {
    for (i = frogs; i > 2; i--) {
      if (i === frogs || i === frogs - 3) {
        var numberString = numberStrings[i];
        var oneLessString = numberStrings[i-1];
        console.log(numberString + " speckled frogs sat on a log eating some most delicious \
bugs. \nOne jumped in the pool where it's nice and cool, \nthen there were " + oneLessString + " speckled frogs.\n")
  } else {
        minusFrog = i - 1
        console.log(i + " speckled frogs sat on a log eating some most delicious bugs. \
\nOne jumped in the pool where it's nice and cool, \nthen there were " + minusFrog + " \
speckled frogs.\n")
    }
    }
    console.log("2 speckled frogs sat on a log eating some most delicious bugs. \nOne \
jumped in the pool where it's nice and cool, \nthen there was 1 speckled frog.\n")
    console.log("1 speckled frog sat on a log eating some most delicious bugs. \nOne \
jumped in the pool where it's nice and cool, \nthen there were no more speckled frogs!\n")
  } else {
    console.log("That's too many frogs! Enter a number that is 10 or less.");
  }
}

speckledFrog(9);

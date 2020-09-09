/*
My final version is below this large comment. My first commit for this file is the code that is commented out.
*/

/*
I couldn't figure out how to create text numbers without copying a third party script to do so.
So I made an array up to "Ten" to pull from. I also added something to tell you you can only have
up to ten frogs if you enter more than 10.


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

*/

/*
I wanted to clean up some of this code. I didn't want to erase me entire first attempt. (I know it's available in my commit history but
I just wanted to save the time and energy by leaving it in the file and commenting it out. Below is my updated version). There were several
issues I wanted to address. In the first version my written numbers were always capitalized and it looked a bit funny. I also didn't realize
my second to last line would print "and then there were one speckled frog" so I fixed that with the tense variable. The one thing I see
that I didn't provide a fix for is if you happen to enter 4 frogs, the final line (aka the fourth line) will not print in written numbers,
instead it will print the default final line I ended the function with. But overall I like this version a lot more.
*/

function speckledFrog (frogs) {

var numberStrings = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
//this variable just cleans up our code a little
var frogQuote = " speckled frogs sat on a log eating some most delicious bugs. \nOne jumped in the pool where it's nice and cool, \nthen there"
var tense = ""

  //a special case if two frogs are entered
  if (frogs === 2) {
      return console.log("Two" + frogQuote+ " was one speckled frog.\n\n1 speckled frog" + frogQuote.slice(15) + " were no more speckled frogs!\n")
  } else if (frogs === 1) { //again a special case
      return console.log("One speckled frog" + frogQuote.slice(15) + " were no more speckled frogs!\n")
    //this has to be less than 10 in order for the written number extension to be possible with how I went about it
  } else if (frogs <= 10 && frogs > 1) {
    //iterate through the number given
    for (i = frogs; i > 1; i--) {
      //change language for multiple or singular "were frogs" and "was frog"
      tense = " were "
      ending = "s"
      //we only need it to change for the second to last line
      if (i === 2) {
        tense = " was "
        ending = ""
      }
      //this lets us write in written numbers for the first and fourth line
      if (i === frogs || i === frogs - 3) {
        var numberString = numberStrings[i];
        var oneLessString = numberStrings[i-1].toLowerCase(); //just to keep it grammatically consistent
        console.log(numberString + frogQuote + tense + oneLessString + " speckled frogs.\n")
      } else {
      minusFrog = i - 1
      //the string concatonation gets a little tedious
      console.log(i + frogQuote + tense + minusFrog + " speckled frog" + ending + ".\n")
      }
    }
  console.log("1 speckled frog" + frogQuote.slice(15) + " were no more speckled frogs!+\n")
    //in case someone enters a negative number, 0, or a number bigger than our written word array
  } else {
    console.log("Enter a number between 1 and 10.");
  }
}

speckledFrog(6);

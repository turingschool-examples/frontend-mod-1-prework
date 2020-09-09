/*### Required
Make your program print the rhyme above for *10* frogs, with attention to where language changes.

//psuedocode:
//All verses have same wording (other than number of frogs) until there are two frogs left.
//create a loop to countdown numbers from 10 to 3 and push results to an Array
//create a loop to handle the verse/wording changes of 2 frogs and push results to Array
//push final string to Array
//print array - should return entire poem.

/*used this to be sure I understood how to handle the concatenation process with a variable that needed to change within the string.
var frogs = 10
var poem = (frogs) + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were " + (frogs - 1) + " speckled frogs.";
console.log(poem);*/

/*used this to be sure I understood decremeters
var countdown = new Array();
for (var i = 10; i >= 1; i--) {
  countdown[i] = i;
}
console.log(countdown);*/

var rhyme = new Array();
for (var i = 10; i > 2; i--) {
  rhyme.push(i + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were " + (i-1) + " speckled frogs.");
}
for (var i=2;i>1; i--) {
  rhyme.push(i + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there was " + (i-1) + " speckled frog.")
}
  rhyme.push("1 speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs!")
console.log(rhyme);

//I couldn't figure out how to make the Array print without /n and a + when i went back and added them into my code. I removed the line breaks from this code, so it would print more cohesively. I realized that I could probably combine the final two stanzas into one string rather than running a loop that will only print one output because that seems a bit excessive, but it was nice to practice with loop syntax and I taught myself how to use decremeters which was helpful.
//I also realized that I could use the code I wrote in extension 1 to write the integer based poem with line breaks as well, so i've included both ways. Function version is below! (once again, could probably simplify the code to be one function and one string variable that includes the last two stanzas but the practice was good for me!)

function getPoem(num1,num2) {
  console.log(num1 + " speckled frogs sat on a log\neating some most delicious bugs.\nOne jumped in the pool where its nice and cool,\nthen there were " + num2 + " speckled frogs.\n");
}
function getPoem2(num1,num2) {
  console.log(num1 + " speckled frogs sat on a log\neating some most delicious bugs.\nOne jumped in the pool where its nice and cool,\nthen there was " + num2 + " speckled frog.\n");
}
var endOfPoem = "1 speckled frog sat on a log\neating some most delicious bugs.\nOne jumped in the pool where its nice and cool,\nthen there were no more speckled frogs!\n";

var story = new Array(getPoem (10,9), getPoem (9,8), getPoem (8,7), getPoem (7,6), getPoem (6,5), getPoem (5,4), getPoem (4,3), getPoem (3,2),getPoem2(2,1), console.log(endOfPoem));

/*### Extension 1
Print word versions of each number in the first and fourth lines, for example, the first verse in the above example would print 'Three speckled frogs...' and 'were two speckled frogs'.*/

function getRhyme(num1,num2) {
  console.log(num1 + " speckled frogs sat on a log\neating some most delicious bugs.\nOne jumped in the pool where its nice and cool,\nthen there were " + num2 + " speckled frogs.\n");
}
function getRhyme2(num1,num2) {
  console.log(num1 + " speckled frogs sat on a log\neating some most delicious bugs.\nOne jumped in the pool where its nice and cool,\nthen there was " + num2 + " speckled frog.\n");
}
var endOfStory = "One speckled frog sat on a log\neating some most delicious bugs.\nOne jumped in the pool where its nice and cool,\nthen there were no more speckled frogs!\n";

var story = new Array(getRhyme("Ten","nine"), getRhyme ("Nine", "eight"), getRhyme ("Eight", "seven"), getRhyme ("Seven", "six"), getRhyme ("Six", "five"), getRhyme ("Five", "four"), getRhyme ("Four", "three"), getRhyme ("Three", "two"),getRhyme2("Two","one"), console.log(endOfStory));

/*### Extension 2
Make your program work for any number of frogs.*/
//Using the function based code I've written above, you could input any number of frogs into the function "getRyhme" and call the function with applicable arguments in the story array. If I were to do this, I would have to add a third function that encompassed the final stanza. I keep thinking there must be a simpler way to do this but I can't sort it out. 

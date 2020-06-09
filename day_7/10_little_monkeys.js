var numOfMonkeys = ["Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two", "One"]

function jumpLittleMonkeys(numOfMonkeys) {
  for (var i = 0; i < numOfMonkeys.length; i++) {
    if (numOfMonkeys[i] !== "One"); {
    console.log(numOfMonkeys[i] + " little monkeys jumping on the bed,\nOne fell off and bumped his head,\nMama called the doctor and the doctor said,\n'No more monkeys jumping on the bed!'\n");
  } if  (numOfMonkeys[i] == "One") {
    console.log(numOfMonkeys[i] + " little monkey jumping on the bed,\nHe fell off and bumped his head,\nMama called the doctor and the doctor said,\n'Get those monkeys right to bed!'\n");
  }
}
}
jumpLittleMonkeys(numOfMonkeys);





// Below are notes from a study/review session with classmates.

/*
Note: song is all the same, except for the first word of the verse (ten, nine, eight, etc.)
last verse is different as well except third line.

This is for integer to word:
funtion getVerse(numberOfMonkeys) {
  var numToWord = getWordForNumber(numberOfMonkeys);
var capitalized = numToWord.charAt(0).toUpperCase
}

function monkeyRhyme(num = 10) {

}

song is all the same, except for the first word of the verse (ten, nine, eight, etc.)

last verse is different as well for the last line.

template string: `works like quotes of a string, but makes it so you can add your variables into your string.
It does the line breaks for you so you don't have to concat.`  ***Check this out later!***


\n for a line break.

var monkeys = ["Ten", "Nine" ...] This is if I don't want to convert an integer to a word, which I don't think I want to do at this point in my understanding.

*/

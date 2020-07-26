//I tried to make this code work for frogs up to 99, but got way to complex for myself and the code is a hot mess.
//Technically it works for up to 19 frogs, but the console log is a mess.

var frogs = 10;

//Below code block is to convert integer into worded number strings, up to ninety-nine
var num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");

//Removing above 19 frogs for simplicity
//var tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

function intoWords(numFrogs) {
  if (numFrogs < 20) {
    var numWord = num[numFrogs];
    console.log(numWord);

//Removing above 19 frogs for simplicity
/*
  } else if (numFrogs >= 20 && numFrogs < 100) {
    var digit = numFrogs % 10;
    var numWord = [tens[~~(numFrogs/10)-2] + (digit? "-" + num[digit]: "")]
    console.log(numWord);
*/
  } else {
    console.log("Number is too high!");
  }
}

for (frogs; frogs > 0; frogs--) {
    intoWords(frogs);
    console.log(" speckled frogs sat on a log", '\n', "eating some most delicious bugs.", '\n', "One jumped in the pool where its nice and cool,", '\n', "then there were ");
    if (frogs === 1) {
      console.log("no more speckled frogs!")
    }
    else {
      intoWords([frogs - 1]);
      console.log(" speckled frogs.", '\n');
    }
}

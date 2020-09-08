
var words = ["Ten", "Nine", "Eight", "Seven", "Six",
             "Five", "Four", "Three", "Two", "One"];

var wordsLength = words.length;

function speckledFrogs(frogs) {
  for (i = frogs; i >= 10 ; i--) {
    if (i > 11 ) {
      console.log(i + " speckled frogs sat on a log\n" +
        "eating some most delicious bugs.\n" +
        "One jumped in the pool where it's nice and cool,\n" +
        "then there were " + (i - 1) + " speckled frogs.\n");
  } else if (i === 11) {
      console.log(i + " speckled frogs sat on a log\n" +
        "eating some most delicious bugs.\n" +
        "One jumped in the pool where it's nice and cool,\n" +
        "then there were ten speckled frogs.\n");
  } else if (i < 11) {
      speckledFrogsWords();
    }
  };
};

function speckledFrogsWords(frogs) {
  for (i = 0; i < wordsLength; i++) {
    if (i <= 7) {
      console.log(words[i] + " speckled frogs sat on a log\n" +
        "eating some most delicious bugs.\n" +
        "One jumped in the pool where it's nice and cool,\n" +
        "then there were " + (words[i + 1].toLowerCase()) + " speckled frogs.\n");
  } else if (i === 8) {
      console.log(words[i] + " speckled frogs sat on a log\n" +
        "eating some most delicious bugs.\n" +
        "One jumped in the pool where it's nice and cool,\n" +
        "then there was " + (words[i + 1].toLowerCase()) + " speckled frog.\n");
  } else if (i === 9) {
      console.log(words[i] + " speckled frog sat on a log\n" +
        "eating some most delicious bugs.\n" +
        "One jumped in the pool where it's nice and cool,\n" +
        "then there were no more speckled frogs!\n");
    }
  };
};

console.log(speckledFrogs(20));

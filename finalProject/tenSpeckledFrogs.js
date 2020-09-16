
var line1 = "speckled frogs sat on a log";
var line2 = "eating some most delicious bugs.";
var line3 = "One jumped in the pool where its nice and cool,";
var line4 = "then there were"
var line5 = "speckled frogs."

for (let i = 10; i > 0; i--) {
  if (i > 2) {
    console.log(i, line1);
    console.log(line2);
    console.log(line3);
    console.log(line4, i - 1, line5);
  } else if (i === 2) {
    console.log("2 speckled frogs sat on a log");
    console.log(line2);
    console.log(line3);
    console.log("then there was 1 speckled frog.");
  }else {
    console.log("1 speckled frog sat on a log");
    console.log(line2);
    console.log(line3);
    console.log("then there were no more speckled frogs!");
  }
}

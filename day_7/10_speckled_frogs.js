
var partOne = " speckled frogs sat on a log" +
 " eating some most delicious bugs." +
 " One jumped in the pool where its nice and cool,"

var partTwo = " speckled frogs sat on a log" +
 " eating some most delicious bugs." +
 " One jumped in the pool where its nice and cool,"

var minFrog = " sat on a log" +
 " eating some most delicious bugs." +
 " One jumped in the pool where its nice and cool,";

var fillOne = "then there were ";
var fillTwo = "then there was ";

function frogChange(frogCount) {
  var lessFrog = frogCount - 1;
  var evenLessFrog = lessFrog - 1;
  var muchLessFrog = evenLessFrog -1;
  if (frogCount == 3) {
    console.log(frogCount + partOne + fillOne+ lessFrog + " speckled frogs. " + lessFrog + partTwo +  fillTwo + evenLessFrog + " speckled frog. " + evenLessFrog + " speckled frog" + minFrog + fillOne + "no more speckled frogs!");
  } else if (frogCount == 4) {
    console.log(frogCount + partOne + fillOne+ lessFrog + " speckled frogs. " + lessFrog + partTwo + fillTwo + evenLessFrog + " speckled frogs. " + evenLessFrog + " speckled frogs" + minFrog + fillTwo + muchLessFrog + " more speckled frog!");
  } else if (frogCount >= 5) {
    console.log(frogCount + partOne + fillOne+ lessFrog + " speckled frogs. " + lessFrog + partTwo + fillOne+ evenLessFrog + " speckled frogs. " + evenLessFrog + " speckled frogs" + minFrog + fillOne + muchLessFrog + " more speckled frogs!");
  } else {
    console.log("Sorry! There aren't enough frogs to finish the nursery rhyme!");
  }
};

frogChange(10);

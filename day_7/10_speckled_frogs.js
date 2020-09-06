//For 3_speckled_frogs

var numbFrogs =3 ;
while ((numbFrogs) > 0) {
 if (numbFrogs == 3) {
  console.log("3 speckled frogs sat on a log, eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were 2 speckled frogs.");
}
  else if (numbFrogs == 2 ) {
    console.log("2  speckled frogs sat on a log eating some most delicious bugs.  One jumped in the pool where its nice and cool,  then there was 1 speckled frog.");
  }
  else if (numbFrogs == 1 ) {
    console.log( "1 speckled frog sat on a log eating some most delicious bugs.  One jumped in the pool where its nice and cool,  then there were no more speckled frogs!");
  }
  numbFrogs--;
};


//Required: for 10_speckled_frogs

var numbFrogs =10 ;
while ((numbFrogs) > 0) {
 if (numbFrogs >= 3) {
  console.log((numbFrogs) + " speckled frogs sat on a log, eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were " + ((numbFrogs)-1) + " speckled frogs.");
}
  else if (numbFrogs == 2 ) {
    console.log("2  speckled frogs sat on a log eating some most delicious bugs.  One jumped in the pool where its nice and cool,  then there was 1 speckled frog.");
  }
  else if (numbFrogs == 1 ) {
    console.log( "1 speckled frog sat on a log eating some most delicious bugs.  One jumped in the pool where its nice and cool,  then there were no more speckled frogs!");
  }
  numbFrogs--;
};
//Add "(numbFrogs) + " the beginning of the first condition and " + ((numbFrogs)-1) + " to the end of the first condition.
//Change first condition to ">= 3" instead of "== 3" to allow it change after it gets to 3 frogs.
//Change numbFrogs equal to 10.


//Extension 1: Print word versions of each number in the first and fourth lines
var numbFrogs =10 ;
var lowerCaseNumbs = ["nine","eight", "seven","six","five","four","three","two","one"];
var upperCaseNumbs = ["Ten","Nine","Eight","Seven","Six","Five","Four","Three","Two","One"];
var i = 0;
var e = 0;
while ((numbFrogs) > 0) {
  for (i=0; i<9; i++) {
 if (numbFrogs >= 3) {
  console.log( (upperCaseNumbs[i]) + " speckled frogs sat on a log, eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were " + (lowerCaseNumbs[i]) + " speckled frogs.");
}
  else if (numbFrogs == 2 ) {
    console.log( (upperCaseNumbs[8]) + " speckled frogs sat on a log eating some most delicious bugs.  One jumped in the pool where its nice and cool,  then there was " + (lowerCaseNumbs[8]) + " speckled frog.");
  }
  else if (numbFrogs == 1 ) {
    console.log( (upperCaseNumbs[9]) + " speckled frog sat on a log eating some most delicious bugs.  One jumped in the pool where its nice and cool,  then there were no more speckled frogs!");
  }
  numbFrogs--;
  }
};

//Extension 2: For any number of Frogs
var numbFrogs = X;
while ((numbFrogs) > 0) {
 if (numbFrogs >= 3) {
  console.log((numbFrogs) + " speckled frogs sat on a log, eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were " + ((numbFrogs)-1) + " speckled frogs.");
}
  else if (numbFrogs == 2 ) {
    console.log("2  speckled frogs sat on a log eating some most delicious bugs.  One jumped in the pool where its nice and cool,  then there was 1 speckled frog.");
  }
  else if (numbFrogs == 1 ) {
    console.log( "1 speckled frog sat on a log eating some most delicious bugs.  One jumped in the pool where its nice and cool,  then there were no more speckled frogs!");
  }
  numbFrogs--;
};

//This code will run for any number of frogs if you replace "X" with the number you desire.

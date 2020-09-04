/*Psuedocode:
1) Create a frog class (logFrog, totalFrog, tense, etc.);
2) Add function jumpFrog
3) Assign objects to class
4)call function

sentenceOne: logFrog + " " + "speckled frog sat on a log eating some most delicious bugs.",
sentenceTwo: "One jumped in the pool where its nice and cool, then there " + tense + jumpFrog + " speckled
*/

/*var speckledFrog = {
  logFrog: 1,
  jumpFrog: 1,
  tense: ["were", "was", "frog", "frogs"],
  totalFrog: "no more",
  frogJump: function() {
    for (var i = 1; i <= 10; i++) {
      if (i === 1) {
        console.log(logFrog.value + " speckled " + tense[2] + " sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there " + tense[0] + " " + jumpFrog + " speckled " + tense[3] + "!" )
      }
      else if (i === 2) {
        console.log((logFrog.value + 1) + " speckled " + tense[3] + " sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there " + tense[1] + " " + jumpFrog + " speckled " + tense[2] + "!" )
      }
      else {
        console.log(speckledFrog)
      }
    }
  }
};

console.log(speckledFrog.frogJump(1));
console.log(speckledFrog.frogJump(2));
console.log(speckledFrog.frogJump(3));
//first attempt, having trouble on where to start. Re-set, try a new approach
*/ //Attempt One


class SpeckledFrog {
  constructor(logFrog) {
    this.logFrog = logFrog;
    this.tense = ["were", "was", "frog", "frogs"];
    this.noFrog = "no more"
  }

  jumpFrog() {
      if (this.logFrog === 1) {
        console.log(this.logFrog + " speckled " + this.tense[2] + " sat on a log eating some delicious bugs. One jumped in the pool where its nice and cool, then there " + this.tense[0] + " " + this.noFrog + " speckled " + this.tense[3] + "!");
      }
      else if (this.logFrog === 2) {
        console.log(this.logFrog + " speckled " + this.tense[3] + " sat on a log eating some delicious bugs. One jumped in the pool where its nice and cool, then there " + this.tense[1] + " " + (this.logFrog - 1) + " speckled " + this.tense[2] + "!");
      }
      else if (this.logFrog >= 3) {
        console.log(this.logFrog + " speckled " + this.tense[3] + " sat on a log eating some delicious bugs. One jumped in the pool where its nice and cool, then there " + this.tense[0] + " " + (this.logFrog - 1) + " speckled " + this.tense[3] + "!");
      }
    }
  };



var frogOne = new SpeckledFrog(1);
var frogTwo = new SpeckledFrog(2);
var frogThree = new SpeckledFrog(3);
var frogFour = new SpeckledFrog(4);
var frogFive = new SpeckledFrog(5);
var frogSix = new SpeckledFrog(6);
var frogSeven = new SpeckledFrog(7);
var frogEight = new SpeckledFrog(8);
var frogNine = new SpeckledFrog(9);
var frogTen = new SpeckledFrog(10);

frogOne.jumpFrog();
frogTwo.jumpFrog();
frogThree.jumpFrog();
frogFour.jumpFrog();
frogFive.jumpFrog();
frogSix.jumpFrog();
frogSeven.jumpFrog();
frogEight.jumpFrog();
frogNine.jumpFrog();
frogTen.jumpFrog();

//is this the best solution? How would I get to to run for any number? Try running 11?

var frogEleven = new SpeckledFrog(11);
frogEleven.jumpFrog();


class Frogs {
  constructor(startingNumberOfFrogs, endingNumberOfFrogs) {
    this.startingNumberOfFrogs = startingNumberOfFrogs;
    this.endingNumberOfFrogs = endingNumberOfFrogs;
  }

  changeSentence() {
    console.log(this.startingNumberOfFrogs + " sat on a log\neating some most delicious bugs.\nOne jumped in the pool where it's nice and cool,\nthen there " + this.endingNumberOfFrogs)
  }
}

var frog1 = new Frogs("10 speckled frogs", "were 9 speckled frogs.")
var frog2 = new Frogs("9 speckled frogs", "were 8 speckled frogs.")
var frog3 = new Frogs("8 speckled frogs", "were 7 speckled frogs.")
var frog4 = new Frogs("7 speckled frogs", "were 6 speckled frogs.")
var frog5 = new Frogs("6 speckled frogs", "were 5 speckled frogs.")
var frog6 = new Frogs("5 speckled frogs", "were 4 speckled frogs.")
var frog7 = new Frogs("4 speckled frogs", "were 3 speckled frogs.")
var frog8 = new Frogs("3 speckled frogs", "were 2 speckled frogs.")
var frog9 = new Frogs("2 speckled frogs", "was 1 speckled frog.")
var frog10 = new Frogs("1 speckled frog", "were no more speckled frogs!")

console.log(frog1.changeSentence(), frog2.changeSentence(), frog3.changeSentence(), frog4.changeSentence(), frog5.changeSentence(), frog6.changeSentence(), frog7.changeSentence(), frog8.changeSentence(), frog9.changeSentence(), frog10.changeSentence());


// Extension 1

class Frogs {
  constructor(startingNumberOfFrogs, endingNumberOfFrogs) {
    this.startingNumberOfFrogs = startingNumberOfFrogs;
    this.endingNumberOfFrogs = endingNumberOfFrogs;
  }

  changeSentence() {
    console.log(this.startingNumberOfFrogs + " sat on a log\neating some most delicious bugs.\nOne jumped in the pool where it's nice and cool,\nthen there " + this.endingNumberOfFrogs)
  }
}

var frog1 = new Frogs("Ten speckled frogs", "were nine speckled frogs.")
var frog2 = new Frogs("Nine speckled frogs", "were eight speckled frogs.")
var frog3 = new Frogs("Eight speckled frogs", "were seven speckled frogs.")
var frog4 = new Frogs("Seven speckled frogs", "were six speckled frogs.")
var frog5 = new Frogs("Six speckled frogs", "were five speckled frogs.")
var frog6 = new Frogs("Five speckled frogs", "were four speckled frogs.")
var frog7 = new Frogs("Four speckled frogs", "were three speckled frogs.")
var frog8 = new Frogs("Three speckled frogs", "were two speckled frogs.")
var frog9 = new Frogs("Two speckled frogs", "was one speckled frog.")
var frog10 = new Frogs("One speckled frog", "were no more speckled frogs!")

console.log(frog1.changeSentence(), frog2.changeSentence(), frog3.changeSentence(), frog4.changeSentence(), frog5.changeSentence(), frog6.changeSentence(), frog7.changeSentence(), frog8.changeSentence(), frog9.changeSentence(), frog10.changeSentence());

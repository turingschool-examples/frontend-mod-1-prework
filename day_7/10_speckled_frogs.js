class NurseryRhyme {
  constructor(protagonist, singular, number)
  {
    this.protagonist = protagonist
    this.singular = singular
    this.number = number
  }
tellRhyme() {
  for (var i = this.number; i >= 1; i--)
  if (i >=3) {
    console.log([i] + " " + this.protagonist + " sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were " + (i - 1) + " " + this.protagonist);
    } else if (i == 2) {
      console.log([i] + " " + this.protagonist + " sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there was " + (i - 1) + " " +  this.singular);
    } else {
      console.log([i] + " " + this.singular + " sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were " + "no more " + this.protagonist + "!");
    }
  }
}

var speckledFrog = new NurseryRhyme("speckled frogs", "speckled frog", 10)


speckledFrog.tellRhyme();

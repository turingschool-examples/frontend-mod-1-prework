class Guitar {
  constructor(type, inTune, numStrings, color) {
    this.type = type;
    this.inTune = inTune;
    this.numStrings = numStrings;
    this.color = color;
  }

  tune() {
    this.inTune = true;
  }

  paintItBlack() {
    this.color = "Black";
  }

  play() {
    console.log("Congrats, you just simulated playing a fake virtual guitar!")
  }

}

var acoustic = new Guitar("Acoustic", false, 6, ["Blue", "Silver"]);

console.log(acoustic);

console.log(acoustic.paintItBlack);

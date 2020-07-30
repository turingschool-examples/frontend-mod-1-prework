// CHECKER BOARD PROGRAM

class CheckerBoard {
  constructor(user, size) {
    this.user = user;
    this.size = size;
  }
  make(size) {
    var check1 = " X"
    var check2 = "X "
    var string1 = check1.repeat(this.size / check1.length)
    var string2 = check2.repeat(this.size / check2.length)

    for (var i = 1; i <= this.size; i++) {
      if (i % 2 === 0) {
        console.log(string1);
      }
      else {
        console.log(string2);
      }
    }
  }
  gift() {
    console.log("Enjoy your new checkerboard!")
  }
}

var myGift = new CheckerBoard ("Lola", 6);

myGift.make();
myGift.gift();

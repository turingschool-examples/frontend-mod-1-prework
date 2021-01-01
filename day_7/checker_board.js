class CheckerBoard {
  constructor(size, white, black, even, odd, grid) {
  this.size = size
  this.white = white
  this.black = black
  this.even = even
  this.odd = odd
  this.grid = grid
  }
  pattern() {
    for ( var x = 0; x < this.size; x++) {
      if (x % 2 === 0) {
        this.even = this.even + this.black;
      } else {
        this.even = this.even + this.white;
      };
    }
    for (var i = 0; i < this.size; i++) {
      if (i % 2 === 0) {
        this.odd = this.odd + this.white;
      } else {
        this.odd = this.odd + this.black;
      };
    }
    for (var c = 0; c < this.size; c++) {
      if (c % 2 === 0) {
        this.grid = this.grid + this.odd + "\n";
      } else {
        this.grid = this.grid + this.even + "\n";
      };
    }
    console.log(this.grid);
  }
}

var firstBoard = new CheckerBoard(10, " ", "x", "", "", "");

firstBoard.pattern();

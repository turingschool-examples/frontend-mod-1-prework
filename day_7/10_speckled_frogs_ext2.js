//EXTENSION TWO

function speckledFrogs(start) {
  for (let i = start; i > 0; i--) {
    if (i > 2) {
      console.log([i] + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where it's nice and cool, then there were " + ([i] - 1) + " speckled frogs.");
    }
    else if (i == 2) {
      console.log([i] + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where it's nice and cool, then there was 1 speckled frog.");
    }
    else {
      console.log([i] + " speckled frog sat on a log eating some most delicious bugs. It jumped in the pool where it's nice and cool, then there were no more speckled frogs!");
    }
  }
}

// enter number of frogs
speckledFrogs(30);

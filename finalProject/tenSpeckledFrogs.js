var frogs = 10;

for (var i = frogs; i >= 1; i--) {
  if (i <= 10 && i != 1 && i != 2) {
    console.log( i + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were " + (i - 1) + " speckled frogs.");
  } else if (i == 2) {
    console.log( i + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there was " + ( i - 1) + " speckled frog.");
  } else {
    console.log( i + " speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs!");
  }
};

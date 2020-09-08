var frogNumber = 10;

for (frogNumber = 10; frogNumber > 0; frogNumber--) {

  if (frogNumber > 2) {
    console.log(frogNumber + ' speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool. Then there were ' + (frogNumber - 1) + ' speckled frogs.');

  } else if (frogNumber == 2) {
    console.log("2 speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there was 1 speckled frog.");

  } else if (frogNumber == 1) {
    console.log("1 speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs!");

  }

};

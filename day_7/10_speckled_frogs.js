for (var i = 10; i >= 1; i--) {
  if (i == 2) {
    console.log(i + " speckled frogs sat on a log \n eating some most delicious bugs. \n One jumped in the pool where its nice and cool, \n then there was " + (i-1) + " speckled frogs.");
  } else if (i == 1) {
    console.log(i + " speckled frog sat on a log eating some most delicious bugs. \n One jumped in the pool where its nice and cool, \n then there were no more speckled frogs.")
  } else {
    console.log(i + " speckled frogs sat on a log \n eating some most delicious bugs. \n One jumped in the pool where its nice and cool, \n then there were " + (i-1) + " speckled frogs.");
}
};

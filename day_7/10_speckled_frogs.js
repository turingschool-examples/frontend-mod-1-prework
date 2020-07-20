// Please note extension of problems in other .js files with the convention "..._ext1.js" and "..._ext2.js". Thanks!

for (var i = 10; i > 0; i--) {
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

var speckledFrogs = 10

for (i = speckledFrogs; i >= 1; i--){
  if (i >= 3 && i <= 10){
    console.log(i + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were " + (i-1) + " speckled frogs!");
  } else if (i == 2 ) {
    console.log(i + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there was 1 speckled frog!");
  } else {
    console.log(i + " speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs!");
}
}

for (var i =10; i >= 1; i--) {
  if (i==1) {
    console.log( i +" speckled frog sat on a log eating some most delicious bugs.\nOne jumped in the pool where its nice and cool,\nthen there were no more speckled frogs!");
  } else {
    console.log( i +" speckled frogs sat on a log eating some most delicious bugs.\nOne jumped in the pool where its nice and cool, then there were " + (i-1) + " speckled frogs.\n");
  }
}

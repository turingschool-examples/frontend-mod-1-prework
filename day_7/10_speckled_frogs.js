var speckledFrogs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < speckledFrogs.length; i++) {
  if (speckledFrogs[i] > 2) {
    console.log((speckledFrogs[i]) + " speckled frogs sat on a log eating some most delicious bugs. One Jumped in the pool where its nice and cool, then there were " + (speckledFrogs[i] - 1) + " speckled frogs.");

  } else if (speckledFrogs[i] == 2) {
    console.log(speckledFrogs[i] + " speckled frog sat on a log eating some most delicious bugs. One Jumped in the pool where its nice and cool, then there was 1 speckled frog." );

  } else if (speckledFrogs[i] < 2) {
    console.log(speckledFrogs[i] + " speckled frog sat on a log eating some most delicious bugs. One Jumped in the pool where its nice and cool, then there were no more speckled frogs.");
  }
}

// I was confused on the instructions of the Extension 1 when it stated "the first and fourth lines". I didnt know if that meant of the array or for every song lyric.
// I attempted several times to get the words to be printed but it continued to mess with the iterations of the loops.
// I'm very curious on how to get these extensions to work though! I will still continue to try and do so even though I'm turning this in as is.

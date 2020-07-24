function speckledFrogs () {
  for (var i = 10; i > 0; i--) {
    if (i === 1) {
      console.log(i + " speckled frog sat on a log eating some most delicious bugs.")
    } else {
      console.log(i + " speckled frogs sat on a log eating some most delicious bugs.")
    }
    console.log("One jumped in the pool where its nice and cool, " )
    if (i === 1 ) {
      console.log("then there were no more speckled frogs!")
    } else {
      console.log("then there were " + (i-1) + " speckled frogs.")
    }
  }
}

speckledFrogs()

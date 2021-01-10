function speckledFrogs(numberOfFrogs){
  for ( var i = numberOfFrogs; i > 0; i--) {
    if (i > 1) {
      console.log(i + " speckled frogs sat on a log eating some most delicious bugs." +
      "\n One jumped in the pool where its nice and cool, then there were " + (i - 1)
      + " speckled frogs.\n\n");
    }
    else {
      console.log(i + " speckled frogs sat on a log eating some most delicious bugs." +
      "\nOne jumped in the pool where its nice and cool, then there were no more" +
      " \nspeckled frogs!")
    }
  }
}

speckledFrogs(10);

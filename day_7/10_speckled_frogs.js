function nurseryRhyme (numOfFrogs) {
  for (var i = numOfFrogs; i > 0; i--) {
    if (i > 1) {
    console.log(i + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were " + (parseInt(i) - 1) + " speckled frogs.");
  }
    else if (i == 1) {
      console.log(i + " speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs.");
    };
  };
  /*if (i == 4) {
    i = "Four"
  }
/else if (i ==3){
    i = "Three"
  }*/

};
nurseryRhyme(10);
//I'm unsure on how to do extension 1 without repeating a bunch of else statements, I know there has to a more efficient way to do it than that.

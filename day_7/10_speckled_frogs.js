//3 speckled frogs sat on a log
//> eating some most delicious bugs.
//> One jumped in the pool where its nice and cool,
//> then there were 2 speckled frogs.

var rhyme = [" speckled frogs sat on a log "];
var rhyme2 = ["eating some most delicious bugs."];
var rhyme3 = ["One jumped in the pool where its nice and cool,"];
var rhyme4 = [" then there were " , " speckled frogs"];


function numb() {
  var x = 10;
  for (var i = 0; i < 10; i++){

    console.log(x + rhyme[0]);
    console.log(rhyme2[0]);
    console.log(rhyme3[0]);
    x--
    console.log(rhyme4[0] + x + rhyme4[1]);

  }
};
 numb();
//console.log(rhyme + rhyme2 + rhyme3 + rhyme4);

var single = ('speckled frog');
var plural = ('speckled frogs');

for (i = 10; i >= 0; i--) {
    if (i > 2){
    var newTotal = i - 1;
    console.log(i + ' ' + plural + ' sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were ' + newTotal + ' speckled frogs.');
  } else if (i == 2){
    var newTotal = i - 1;
    console.log(i + ' ' + plural + ' sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there was ' + newTotal + ' ' + single + '.');
  } else if (i == 1){
    console.log(i + ' ' + single + ' sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckeld frogs!' );
  }
}

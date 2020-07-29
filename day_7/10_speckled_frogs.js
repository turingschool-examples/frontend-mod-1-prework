/* > 3 speckled frogs sat on a log
> eating some most delicious bugs.
> One jumped in the pool where its nice and cool,
> then there were 2 speckled frogs.
>
> 2 speckled frogs sat on a log
> eating some most delicious bugs.
> One jumped in the pool where its nice and cool,
> then there was 1 speckled frog.
>
> 1 speckled frog sat on a log
> eating some most delicious bugs.
> One jumped in the pool where its nice and cool,
> then there were no more speckled frogs!

### Required
Make your program print the rhyme above for *10* frogs, with attention to where language changes.

### Extension 1
Print word versions of each number in the first and fourth lines, for example, the first verse in the above example would print 'Three speckled frogs...' and 'were two speckled frogs'.

### Extension 2
Make your program work for any number of frogs. */

var frogTotal = 10;
var frogArray = Array.from(Array(frogTotal), (_,i) => i+1);

var frogReverse = frogArray.reverse();


for (i = 0; i < frogReverse.length; i++) {
  if (frogReverse[i] > 2) {
    console.log((frogReverse[i]) + " speckled frogs sat on a log")
    console.log("eating some most delicious bugs.");
    console.log("One jumped in the pool where its nice and cool,");
    console.log("then there were " + (frogReverse[i] - 1) + " speckled frogs!");

  }

  else if (frogReverse[i] == 2) {
    console.log((frogReverse[i]) + " speckled frogs sat on a log")
    console.log("eating some most delicious bugs.");
    console.log("One jumped in the pool where its nice and cool,");
    console.log("then there was " + (frogReverse[i] - 1) + " speckled frog!");
  }

  else if (frogReverse[i] = 1) {
    console.log((frogReverse[i]) + " speckled frog sat on a log")
    console.log("eating some most delicious bugs.");
    console.log("One jumped in the pool where its nice and cool,");
    console.log("then there were no more speckled frogs!");
  }

};

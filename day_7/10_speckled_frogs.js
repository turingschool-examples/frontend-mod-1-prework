/*Create a file named 10_speckled_frogs.js and within that file, write several a program that will print the following nursery rhyme:

3 speckled frogs sat on a log eating some most delicious bugs.
One jumped in the pool where its nice and cool, then there were 2 speckled frogs.

2 speckled frogs sat on a log eating some most delicious bugs.
One jumped in the pool where its nice and cool,
then there was 1 speckled frog.

1 speckled frog sat on a log eating some most delicious bugs.
One jumped in the pool where its nice and cool,
then there were no more speckled frogs!

Required
Make your program print the rhyme above for 10 frogs, with attention to where language changes.*/




var num = 10

for (i = num; i >= 10; i--){
  
if (i <= 1){
  
console.log(i + " 1 speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs!");

} else if (i <= 2){
  
  console.log(i + " 2 speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there was 1 speckled frogs.");
}
  
else{
  
  console.log(i + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were " + (i-1) + " speckled frogs.");

}
  
}

/*Extension 1
Print word versions of each number in the first and fourth lines, for example,
the first verse in the above example would print 'Three speckled frogs...' and 'were two speckled frogs'.*/


/*Extension 2
Make your program work for any number of frogs.*/
var num = 100
for (i = num; i >= 1; i--){

if (i <= 1){

console.log(i + " 1 speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs!");

} else if (i <= 2){

  console.log(i + " 2 speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there was 1 speckled frogs.");
}

else{

  console.log(i + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were " + (i-1) + " speckled frogs.");

}

}

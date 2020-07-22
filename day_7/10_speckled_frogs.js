/* Create a file named `10_speckled_frogs.js` and within that file, write several a program that will print the following nursery rhyme:
> 3 speckled frogs sat on a log
> eating some most delicious bugs.
> One jumped in the pool where its nice and cool,
> then there were 2 speckled frogs.
>
> 2 speckled frogs sat on a log
> eating some most delicious bugs.
> One jumped in the pool where its nice and cool,
> then there was 1 speckled frogs.
>
> 1 speckled frog sat on a log
> eating some most delicious bugs.
> One jumped in the pool where its nice and cool,
> then there were no more speckled frogs!


### Required
Make your program print the rhyme above for *10* frogs, with attention to where language changes. */




var numbers = [10, 9 , 8, 7, 6, 5, 4, 3, 2, 1];
var newNumbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

var string1 = "speckled frogs sat on a log"
var string2 = "eating some most delicious bugs."
var string3 = "One jumped in the pool where its nice and cool"
var string4 = "then there were"
var string5 = "speckled frogs."

for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i] +  ` ${string1} ${string2} ${string3} ${string4} ` + newNumbers[i] + ` ${string5}`);
};

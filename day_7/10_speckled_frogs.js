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





var numbers = [10, 9, 8, 7, 6, 5, 4, 3,2, 1]

for (i = 0; i <= numbers.length; i++) {
  console.log(`${numbers[i]}  speckled frogs sat on a log eating some most delicious
    bugs. One jumped in the pool where its nice and cool then there were ${numbers[i] - 1} speckled frogs.`);
};

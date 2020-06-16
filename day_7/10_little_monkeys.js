/*
## 10 Little Monkeys

Create a file named `10_little_monkeys.js` and within that file, write a program that will print the following nursery rhyme, but for *10* monkeys.

> Three little monkeys jumping on the bed,
> One fell off and bumped his head,
> Mama called the doctor and the doctor said,
> "No more monkeys jumping on the bed!"
>
> Two little monkeys jumping on the bed,
> One fell off and bumped his head,
> Mama called the doctor and the doctor said,
> "No more monkeys jumping on the bed!"
>
> One little monkey jumping on the bed,
> He fell off and bumped his head,
> Mama called the doctor and the doctor said,
> "Get those monkeys right to bed!"

### Bonus
Can you write the program so that it will run for any number of monkeys?
*/

// Two different ways

var firstRhyme = " little monkeys jumping on the bed, One fell off and bumped his head, Mama called the doctor and the doctor said, 'No more monkeys jumping on the bed!'"
var secondRhyme = ' little monkey jumping on the bed, He fell off and bumped his head, Mama called the doctor and the doctor said, "Get those monkeys right to bed!"'

for (var i = 10; i > 0; i--){//i equals 10 and i counts down stopping at 1
  if (i > 1/*if i is greater than 1*/) console.log(i + /*log i + the following string to the console*/firstRhyme);
  else if (i = 1/*if i equals 1*/) console.log(i + /*log i + the following string to the console*/secondRhyme);
}

for (var i = 10; i > 0; i--){//i equals 10 and i counts down stopping at 1
  if (i === 10/*if i equals 10*/) console.log("Ten" + /*log i + the following string to the console*/firstRhyme);
  if (i === 9/*if i equals 10*/) console.log("Nine" + /*log i + the following string to the console*/firstRhyme);
  if (i === 8/*if i equals 10*/) console.log("Eight" + /*log i + the following string to the console*/firstRhyme);
  if (i === 7/*if i equals 10*/) console.log("Seven" + /*log i + the following string to the console*/firstRhyme);
  if (i === 6/*if i equals 10*/) console.log("Six" + /*log i + the following string to the console*/firstRhyme);
  if (i === 5/*if i equals 10*/) console.log("Five" + /*log i + the following string to the console*/firstRhyme);
  if (i === 4/*if i equals 10*/) console.log("Four" + /*log i + the following string to the console*/firstRhyme);
  if (i === 3/*if i equals 10*/) console.log("Three" + /*log i + the following string to the console*/firstRhyme);
  if (i === 2/*if i equals 10*/) console.log("Two" + /*log i + the following string to the console*/firstRhyme);
  else if (i === 1/*if i equals 1*/) console.log("One" + /*log i + the following string to the console*/secondRhyme);
}

//Same two ways but without the notations

/*
for (var i = 10; i > 0; i--){
  if (i > 1) console.log(i + firstRhyme);
  else if (i = 1) console.log(i + secondRhyme);
}

for (var i = 10; i > 0; i--){
  if (i === 10) console.log("Ten" + firstRhyme);
  if (i === 9) console.log("Nine" + firstRhyme);
  if (i === 8) console.log("Eight" + firstRhyme);
  if (i === 7) console.log("Seven" + firstRhyme);
  if (i === 6) console.log("Six" + firstRhyme);
  if (i === 5) console.log("Five" + firstRhyme);
  if (i === 4) console.log("Four" + firstRhyme);
  if (i === 3) console.log("Three" + firstRhyme);
  if (i === 2) console.log("Two" + firstRhyme);
  else if (i === 1) console.log("One" + secondRhyme);
}
*/

// Bonus: Yes, i can be declared to start at any number and the number in the loop after the comparison operator (in this case 0) can be adjusted to any number as long as it is a lesser value than i

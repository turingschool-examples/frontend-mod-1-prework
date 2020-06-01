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

for (var i = 10; i > 0; i--){//i equals 10 and i counts down stopping at 1
  if (i > 1/*if i is greater than 1*/) console.log(i + /*log i + the following string to the console*/' little monkeys jumping on the bed, One fell off and bumped his head, Mama called the doctor and the doctor said, "No more monkeys jumping on the bed!"');
  else if (i = 1/*if i equals 1*/) console.log(i + /*log i + the following string to the console*/' little monkey jumping on the bed, He fell off and bumped his head, Mama called the doctor and the doctor said, "Get those monkeys right to bed!"');
}

// Bonus: Yes, i can be declared to start at any number and the number in the loop after the comparison operator (in this case 0) can be adjusted to any number as long as it is a lesser value than i

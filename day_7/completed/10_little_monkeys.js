/*
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
var numbers = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"]


  for (var i = 10; i > 0; i--){
    if (i == 1) {
      console.log(numbers[0] + ' little monkey jumping on the bed, \nHe fell off and bumped his head, \nMama called the doctor and the doctor said, \n"Get those monkeys right to bed!" \n');
    } else {
      console.log(numbers[i - 1] + ' little monkeys jumping on the bed, \nOne fell off and bumped his head, \nMama called the doctor and the doctor said, \n"No more monkeys jumping on the bed!" \n');
    }
  }

/* ## 10 Little Monkeys

// Create a file named `10_little_monkeys.js` and within that file, write a program that
// will print the following nursery rhyme, but for *10* monkeys.

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
*/

var monkeys = ["Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two", "One"];

for (var i = 0; i < monkeys.length; i++) {
  if (i === 9) {
    console.log(monkeys[i] + " little monkey jumping on the bed,")
    console.log("He fell off and bumped his head,")
    console.log("Mama called the doctor and the doctor said,")
    console.log("Get those monkeys right to bed!")
  } else {
    console.log(monkeys[i] + " little monkeys jumping on the bed,")
    console.log("One fell off and bumped his head,")
    console.log("Mama called the doctor and the doctor said,")
    console.log("No more monkeys jumping on the bed!")
    console.log("")
  }
};

// ### Bonus
// Can you write the program so that it will run for any number of monkeys?

/*I would like to come back to this question and try to figure this out on my own.
For the sake of time I'll just go with my first answer.*/

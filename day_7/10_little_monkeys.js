/* this block of code will give the desired result only
when a numerical value is written.
// expected output: 100 little monkes jumping on the bed,
                    One fell off and bimped his head
                    Mama called the doctor and the doctor said,
                    'No more monkeys jumping on the bed!'
*/var monkey = 100

if (monkey ==  1) {
  console.log( monkey + " little monkey jumping on the bed," );
  console.log("One fell off and bumped his head,");
  console.log("Mama called the doctor and the doctor said,");
  console.log("'Get those monkeys right to the bed!'");
} else if (monkey == [ 2,  3,  4,  5,  6,  7, , 8, , 9, , 10]) {
  console.log(monkey + " little monkeys jumping on the bed");
  console.log("One fell off and bumped his head,");
  console.log("Mama called the doctor and the doctor said,");
  console.log("'No more monkeys jumping on the bed!'");
} else if (monkey >= 1) {
  console.log(monkey + " little monkeys jumping on the bed");
  console.log("One fell off and bumped his head,");
  console.log("Mama called the doctor and the doctor said,");
  console.log("'No more monkeys jumping on the bed!'");
} else{
  console.log("pick a number");
}
//
/* I am trying to use only the string to run the rhyme for any numbers
of monkeys. I can do it from one to ten, but I am still missing
the rest fo the numbers */

var monkey = "one houndred"

if (monkey === "one") {
  console.log( monkey + " little monkey jumping on the bed," );
  console.log("One fell off and bumped his head,");
  console.log("Mama called the doctor and the doctor said,");
  console.log("'Get those monkeys right to the bed!'");
} else if (monkey === ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]) {
  console.log(monkey + " little monkeys jumping on the bed");
  console.log("One fell off and bumped his head,");
  console.log("Mama called the doctor and the doctor said,");
  console.log("'No more monkeys jumping on the bed!'");
} else if (monkey === "") {
  console.log(monkey + " little monkeys jumping on the bed");
  console.log("One fell off and bumped his head,");
  console.log("Mama called the doctor and the doctor said,");
  console.log("'No more monkeys jumping on the bed!'");
} else{
  console.log("");
}
/* expected output: One houndred little monkeys jumping on the bed,
                    One fell off tand bumped his head,
                    Mama called the doctor and the doctor said,
                    'No more monkeys jumping on the bed!'
// ---------------------------------------------------
// /* expected output: twenty little monkeys jumping on the bed,
//                     One fell off and bumped his head,
//                     Mama called the doctor and the doctor said,
//                     "No m"*/

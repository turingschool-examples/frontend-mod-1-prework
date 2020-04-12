//To get this nursery rhyme to repeat 10 times over, we need to use a loop.
//This loop starts at the highest number, and every the number returns more than lowest number, it subtracts 1.
//So far this variable only counts down the numbers from 10 to 1. There is no string yet.
//We can make the variable replace the dynamic part of the string by using a concatenation method.
//In this case the variabl monkeys is the same as the number at the beginning each rhyme.
for (var monkeys = 10; monkeys >= 1; monkeys--) {

//There is one string that must be different from the others. That's the final one. "monkeys" is now "monkey"
//and the last sentence is completely different. So in this case we need to use an if statement.
//if the variable becomes equal to 1, we need to add that variable to the custom string.
if (monkeys === 1) {
  console.log(monkeys + " little monkey jumping on the bed, One fell off and bumped his head, Mama called the doctor and the doctor said,'No more monkeys jumping on the bed!'");
}

//If the above statement is false, then we just add the variable to a default string that applies to rhymes 10-2.
else {
console.log(monkeys + " little monkeys jumping on the bed, One fell off and bumped his head, Mama called the doctor and the doctor said, 'No more monkeys jumping on the bed!'");
}

}
//Bonus
// You can run the program for any number of monkeys by changing the conditions of the loop, so adjusting the start of 10 or 1. You could also exclude numbers within the range by using more if or else if statements.

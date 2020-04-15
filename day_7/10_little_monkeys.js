var monkeys = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

for (i = 9; i >= 0; i--) {
  if (i > 0) {
    console.log(` ${monkeys[i]} little monkeys jumping on the bed,\n One fell off and bumped his head,\n Mama called the doctor and the doctor said,\n \"No more monkeys jumping on the bed!\" \n`);
  } else {
    console.log(` ${monkeys[i]} little monkey jumping on the bed,\n He fell off and bumped his head,\n Mama called the doctor and the doctor said,\n \"Get those monkeys right to bed!\"\n`);
  }
}

// Bonus question:
// Changed the initialization statement to 'i = monkeys.length -1' so it will loop through all elements in the array, starting at the last element. This means the loop will run for any number of monkeys (as long as the monkeys are in the array).

var monkeys = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen'];

for (i = monkeys.length -1; i >= 0; i--) {
  if (i > 0) {
    console.log(` ${monkeys[i]} little monkeys jumping on the bed,\n One fell off and bumped his head,\n Mama called the doctor and the doctor said,\n \"No more monkeys jumping on the bed!\" \n`);
  } else {
    console.log(` ${monkeys[i]} little monkey jumping on the bed,\n He fell off and bumped his head,\n Mama called the doctor and the doctor said,\n \"Get those monkeys right to bed!\"`);
  }
}

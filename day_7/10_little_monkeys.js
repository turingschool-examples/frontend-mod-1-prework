var monkeys = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

for (i = 9; i >= 0; i--) {
  if (i > 0) {
    console.log(` ${monkeys[i]} little monkeys jumping on the bed,\n One fell off and bumped his head,\n Mama called the doctor and the doctor said,\n \"No more monkeys jumping on the bed!\" \n`);
  } else {
    console.log(` ${monkeys[i]} little monkey jumping on the bed,\n He fell off and bumped his head,\n Mama called the doctor and the doctor said,\n \"Get those monkeys right to bed!\"\n`);
  }
}

// Bonus question:
// Changed the initialization statement to i = monkeys.length so it will loop through all elements in the array, starting at the end, no matter the arrays length (number of monkeys).

var monkeys = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen'];

for (i = monkeys.length; i >= 0; i--) {
  if (i > 0) {
    console.log(` ${monkeys[i]} little monkeys jumping on the bed,\n One fell off and bumped his head,\n Mama called the doctor and the doctor said,\n \"No more monkeys jumping on the bed!\" \n`);
  } else {
    console.log(` ${monkeys[i]} little monkey jumping on the bed,\n He fell off and bumped his head,\n Mama called the doctor and the doctor said,\n \"Get those monkeys right to bed!\"`);
  }
}

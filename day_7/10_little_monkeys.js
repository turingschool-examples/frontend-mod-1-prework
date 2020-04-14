var monkeys = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

for (i = 9; i >=0; i--) {
  if (i > 0) {
    console.log(` ${monkeys[i]} little monkeys jumping on the bed,\n One fell off and bumped his head,\n Mama called the doctor and the doctor said,\n \"No more monkeys jumping on the bed!\" \n`);
  } else {
    console.log(` ${monkeys[i]} little monkey jumping on the bed,\n He fell off and bumped his head,\n Mama called the doctor and the doctor said,\n \"Get those monkeys right to bed!\"`);
  }
}

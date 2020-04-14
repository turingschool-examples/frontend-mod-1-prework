var monkeys = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

for (i = 9; i >=0; i--) {
  if (i > 0) {
    console.log(`${monkeys[i]} little monkeys jumping on the bed, One fell off and bumped his head, Mama called the doctor and the doctor said, \"No more monkeys jumping on the bed!\"`);
  } else {
    console.log(`${monkeys[i]} little monkey jumping on the bed, He fell off and bumped his head, Mama called the doctor and the doctor said, \"Get those monkeys right to bed!\"`);
  }
}

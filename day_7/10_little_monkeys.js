function monkey(){

var numberString = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

for (let number = 10; number > 0; number--)

if (number <= 10 && number > 1) {
  console.log(numberString[number - 1] + ' little monkeys jumping on the bed, One fell off and bumped his head, Mama called the doctor and the doctor said, "No more monkeys jumping on the bed!"')} else {
    console.log(numberString[number - 1] + ' little monkey jumping on the bed, He fell off and bumped his head, Mama called the doctor and the doctor said, "Get those monkeys right to bed!"')
  }
}

monkey();

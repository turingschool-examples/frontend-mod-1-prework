stringArray = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

// //This code runs for 10 monkeys:
for (i = 10; i>0; i--) {
  if (i > 1) {
    console.log(stringArray[i - 1] + ' little monkeys jumping on the bed,');
    console.log('One fell off and bumped his head,');
    console.log('Mama called the doctor and the doctor said,');
    console.log('"No more monkeys jumping on the bed!"' + '\n');
    }
  else if (i == 1) {
    console.log('One little monkey jumping on the bed,');
    console.log('He fell off and bumped his head,');
    console.log('Mama called the doctor and the doctor said,')
    console.log('"Get those monkeys right to bed!"');
  }
}

//For the bonus: I don't understand how you would write this program to work with 
//any number of monkeys without storing an infite number of values in your array.

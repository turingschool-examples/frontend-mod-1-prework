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

// This code runs for a different number of monkeys ONLY if you feed in a different
// stringArray with the string values of the numbers going up to whatever
// number you inputted.I think you would need a string of infinite values to
// get this work for any arbitrary number. 
function monkeyRhyme(monkeyNumber){
  for (i = monkeyNumber; i>0; i--) {
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
}

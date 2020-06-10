

function count(digit){              // the string as parameter
  var numbers = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine','Ten'];

var digitString = digit.toString(); //changes integer to string, can then be used as array index

    return numbers[digit];  // returns the number in word form
}
for (var i = 10; i > 0; i--)
{
  if (i <= 10, i > 1){
    console.log(count(i) + ' little monkeys jumping on the bed,');
    console.log('One fell off and bumped his head,');
    console.log('Mama called the doctor and the doctor said,');
    console.log('"No more monkeys jumping on the bed!"');
    console.log("");
  }
  else if (i = 1){
    console.log('One little monkey jumping on the bed,');
    console.log('He fell off and bumped his head,');
    console.log('Mama called the doctor and the doctor said,');
    console.log('"Get those monkeys right to bed!"');
}
}

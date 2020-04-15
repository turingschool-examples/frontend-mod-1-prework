/* ## 10 Little Monkeys

Create a file named `10_little_monkeys.js` and within that file, write a program that will print the following nursery rhyme, but for *10* monkeys.

> Ten little monkeys jumping on the bed,
> One fell off and bumped his head,
> Mama called the doctor and the doctor said,
> "No more monkeys jumping on the bed!"
>
> Nine little monkeys jumping on the bed,
> One fell off and bumped his head,
> Mama called the doctor and the doctor said,
> "No more monkeys jumping on the bed!"
>
> Eight little monkey jumping on the bed,
> He fell off and bumped his head,
> Mama called the doctor and the doctor said,
> "Get those monkeys right to bed!"

### Bonus
Can you write the program so that it will run for any number of monkeys?
*/

/*
var monkeys = 5;
  for (var i = monkeys; i > 0; i--) {
    console.log(i);
}
*/

/*
var monkeys = 5;
  for (var i = monkeys; i >= 0; i--) {
    console.log(nurseryRhyme);

var nurseryRhyme =
(i + ' little monkeys jumping on the bed\, ' +
'One fell off and bumped his head\, ' +
'Mama called the doctor and the doctor said\, ' +
'"No more monkeys jumping on the bed!" ');
}
*/
var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function convert_millions(num) {
  if (num >= 1000000) {
    return convert_millions(Math.floor(num / 1000000)) + " million " + convert_thousands(num % 1000000);
  } else {
    return convert_thousands(num);
  }
}

function convert_thousands(num) {
  if (num >= 1000) {
    return convert_hundreds(Math.floor(num / 1000)) + " thousand " + convert_hundreds(num % 1000);
  } else {
    return convert_hundreds(num);
  }
}

function convert_hundreds(num) {
  if (num > 99) {
    return ones[Math.floor(num / 100)] + " hundred " + convert_tens(num % 100);
  } else {
    return convert_tens(num);
  }
}

function convert_tens(num) {
  if (num < 10) return ones[num];
  else if (num >= 10 && num < 20) return teens[num - 10];
  else {
    return tens[Math.floor(num / 10)] + " " + ones[num % 10];
  }
}

function convert(num) {
  if (num == 0) return "zero";
  else return convert_millions(num);
}

//end of conversion code

//testing code begins here

function main() {
  var monkeys = [10, 9, 8, 7, 6, 5, 4, 3, 2];
  var nurseryRhyme =
  ('little monkeys jumping on the bed\, ' +
  'One fell off and bumped his head\, ' +
  'Mama called the doctor and the doctor said\, ' +
  '"No more monkeys jumping on the bed!" ');

  for (var i = 0; i < monkeys.length; i++) {
    console.log(convert(monkeys[i]) + ' ' + (nurseryRhyme));
  }

  var oneMonkey =
  ('One little monkey jumping on the bed\, ' +
  'One fell off and bumped his head\, ' +
  'Mama called the doctor and the doctor said\, ' +
  '"No more monkeys jumping on the bed!" ');

console.log(oneMonkey);
}

main();

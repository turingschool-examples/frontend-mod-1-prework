//word variables
var rhyme = 'little monkeys jumping on the bed, one fell off and bumped his head, Mama called the doctor and the doctor said, "No monkeys jumping on the bed!"';
var onesAndTeens = ["", "one ", "two ", "three ", "four ", "five ", "six ", "seven ", "eight ", "nine ", "ten ", "eleven ", "twelve ", "thirteen ", "tourteen ", "fifteen ", "sixteen ", "seventeen ", "eighteen ", "nineteen "];
var tens = ["", "", "twenty ", "thirty ", "forty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety "];
var thousandsAndBeyond = ["", "thousand ", "million ", "billion ", "trillion ", "quadrillion ", "quintillion ", "sextillion ", "septillion ", "octillion ", "nonillion ", "decillion ", "undecillion ", "duodecillion ", "tredecillion ", "quatuordecillion ", "quindecillion ", "sexdecillion ", "septendecillion ", "octodecillion ", "novemdecillion ", "vigintillion "];
//counting tools
var digitGroups = [];
var countPrinter = "";
var finalCount = "";

function digitGroupSeparator (x) {
  var digitSeparator = x.toString().split('');
//make digitSeparator evenly distribute into groups of 3
  if (x.toString().length % 3 == 1) {
    digitSeparator.unshift("0", "0");
  } else if (x.toString().length % 3 == 2) {
    digitSeparator.unshift("0");
  }
  digitSeparator.map(Number);
//turn digitSeparator into separate groups of 3
  for (i = digitSeparator.length, y = 0, z = 3; i >= 0; i--, y+=3, z+=3) {
    digitGroups.push(digitSeparator.slice(y, z).join(''));
  }
  digitGroups = digitGroups.splice (0, digitSeparator.length / 3); //clean empty arrays, stop values based on z in the for loop weren't behaving correctly.
  //digitGroups.unshift('0');
  digitGroups.map(Number);
  //return digitGroups;
  digitSeparator = '';
}

function digitWordTranslator (y)  {
//tens place
  var n = y % 100;
  if (n < 20) {
    var tenPlace = onesAndTeens[n];
  } else if (n >= 20) {
    var tenPlace = tens[(n - n % 10) / 10] + onesAndTeens[n % 10];
  }
//hundreds place
  var hundred = Math.trunc(y / 100);

  if (hundred >= 10) {
    hundred = hundred % 10;
  }

  if (hundred >=1) {
    var hundredPlace = onesAndTeens[hundred] + "hundred ";
  } else {
    var hundredPlace = '';
  }

  if (y == 0) {
    return '';
  } else {
    return hundredPlace + tenPlace;
  }
}

function jump (monkey) {
  for (n = monkey; n > 0; n--) {
    digitGroupSeparator(n);
    if (digitGroups.length > 1) {
      for (i = digitGroups.length - 1, j = 0; i >= 0; i--, j++) {
        countPrinter = digitWordTranslator(digitGroups[i]) + thousandsAndBeyond[j] + countPrinter;
      }
    } else {
  countPrinter = digitWordTranslator(n);
    }
  console.log(countPrinter + rhyme);
  countPrinter = '';
  digitGroups = [];
} console.log("no more little monkeys jumping on the bed.")
}

jump(10);

const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
console.log('');
rl.question('How many monkeys do you have? ', (answer) => {
// TODO: Log the answer in a database
jump(`${answer}`);
rl.close();
});

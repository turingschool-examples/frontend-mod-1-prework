var rhyme = 'little monkeys jumping on the bed, One fell off and bumped his head, Mama called the doctor and the doctor said, "No monkeys jumping on the bed!"'

var onesAndTeens = ["", "one ", "two ", "three ", "four ", "five ", "six ", "seven ", "eight ", "nine ", "ten ", "eleven ", "twelve ", "thirteen ", "tourteen ", "fifteen ", "sixteen ", "seventeen ", "eighteen ", "nineteen "];

var tens = ["", "", "twenty ", "thirty ", "forty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety "];

var rhyme = 'little monkeys jumping on the bed, One fell off and bumped his head, Mama called the doctor and the doctor said, "No monkeys jumping on the bed!"'

function makingWords(y) {

  var n = y % 100;
  var hundred = Math.trunc(y / 100);
//tens place
  if (y < 20) {
    var tenPlace = onesAndTeens[n];
  } else if (y >= 20) {
    var tenPlace = tens[(n - n % 10) / 10] + onesAndTeens[n % 10];
  }
//hundreds
  if (hundred >= 10) {
    hundred = hundred % 10;
  }
  if (hundred >= 1) {
    var hundredPlace = onesAndTeens[hundred] + "hundred ";
  } else {
    var hundredPlace = '';
  }
  if (y == 0) {
    return 0;
  } else {
  return hundredPlace + tenPlace;
}
}

function jump(monkey) {
  for (x = monkey; x > 0; x--) {
//hundred
    var hundo = makingWords(x);
//thousand
    if ((Math.trunc(x / 1000)) == 0) {
      var thouso = '';
    } else {
      var thouso = makingWords(Math.trunc(x / 1000)) + "thousand ";
    }
//MILLIONS
    if ((Math.trunc(x / 1000000)) == 0) {
    var milo = '';
    } else {
    var milo = makingWords(Math.trunc(x / 1000000)) + "million ";
    }
//BILLION
    if ((Math.trunc(x / 1000000000)) == 0) {
    var bilo = '';
    } else {
    var bilo = makingWords(Math.trunc(x / 1000000000)) + "billion ";
    }
//Trillions
    if ((Math.trunc(x / 1000000000000)) == 0) {
    var tril = '';
    } else {
    var tril = makingWords(Math.trunc(x / 1000000000000)) + "billion ";
}
//Quadrillion
    if ((Math.trunc(x / 1000000000000000)) == 0) {
    var quad = '';
    } else {
    var quad = makingWords(Math.trunc(x / 100000000000000)) + "quadrillion ";
}
//Quintillion
    if ((Math.trunc(x / 1000000000000000000)) == 0) {
    var quin = '';
    } else {
    var quin = makingWords(Math.trunc(x / 100000000000000000)) + "quintillion ";
    }
//Sextillion
    if ((Math.trunc(x / 1000000000000000000000)) == 0) {
    var sext = '';
    } else {
    var sext = makingWords(Math.trunc(x / 100000000000000000000)) + "sextillion ";
    }
    if (monkey > 9999999999999999999999){
      var x = 0;
      console.log("Okay Jane Goodall, that's enough monkeys. Try a number less than a septillian.")
    } else if (monkey = 0) {
      console.log ("Zero monkeys jumping on the bed, thank god.")
    } else {
      console.log (sext + quin + quad + tril + bilo + milo + thouso + hundo + rhyme);
    }
    }
  }

  jump(10);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('How many monkeys do you have? ', (answer) => {
  // TODO: Log the answer in a database
  jump(`${answer}`);
  rl.close();
});

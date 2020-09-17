function frogs(numInitialFrogs) {
  var rhyme = '';
  var firstTime = 1;
  var lastTime = numInitialFrogs; // when building loop, start i at 1
  var currNumFrogs = numInitialFrogs;
  for (var i = 1; i <= numInitialFrogs; i++) {
    var currMsg = '';
    if (i === 1) { // build first iteration msg
      var currNum = numToString(numInitialFrogs);
      var currNumCap = currNum.charAt(0).toUpperCase() + currNum.slice(1);
      currMsg = `${currNumCap} speckled frogs sat on a log eating some most delicious bugs.\nOne jumped in the pool where it's nice and cool, then there were ${numToString(numInitialFrogs - 1)} speckled frogs.\n\n`;
      rhyme += currMsg;
    } else if (i === numInitialFrogs) { // build last iteration msg
      currMsg = `One speckled frog sat on a log eating some most delicious bugs.\nOne jumped in the pool where it's nice and cool,\nthen there were no more speckled frogs!`;
      rhyme += currMsg;
    } else if (currNumFrogs > 2) { // any other inner msg
      var currNum = numToString(currNumFrogs);
      var currNumCap = currNum.charAt(0).toUpperCase() + currNum.slice(1);
      currMsg = `${currNumCap} speckled frogs sat on a log eating some most delicious bugs.\nOne jumped in the pool where it's nice and cool,\nthen there was ${numToString(currNumFrogs - 1)} speckled frogs.\n\n`;
      rhyme += currMsg;
    } else if (currNumFrogs === 2) { // if frogs is two, need specific formatting for one frog left on last line
      currMsg = `Two speckled frogs sat on a log eating some most delicious bugs.\nOne jumped in the pool where it's nice and cool,\nthen there was one speckled frog.\n\n`;
      rhyme += currMsg;
    }
    currNumFrogs -= 1;
  }


  // rhyme contains the entire string, not yet formatted
  return rhyme;
}

// iterate through whole string,
// at numbers (not NaN and not \n)
  // also check if next element is number
    // if it is, build a separate string and keep storing values until a value is not a number
  // call helper function

  // make sure beginnings of sentences are capitalized


function numToString(num) {
  var fullString = ``;
  var ones = {
    0 : '',
    1 : 'one',
    2 : 'two',
    3 : 'three',
    4 : 'four',
    5 : 'five',
    6 : 'six',
    7 : 'seven',
    8 : 'eight',
    9 : 'nine'
  };

  var teens = {
    10 : 'ten',
    11 : 'eleven',
    12 : 'twelve',
    13 : 'thirteen',
    14 : 'fourteen',
    15 : 'fifteen',
    16 : 'sixteen',
    17 : 'seventeen',
    18 : 'eighteen',
    19 : 'nineteen'
  };

  var tens = {
    0 : '',
    2 : 'twenty',
    3 : 'thirty',
    4 : 'fourty',
    5 : 'fifty',
    6 : 'sixty',
    7 : 'seventy',
    8 : 'eighty',
    9 : 'ninety'
  };

  var above = ['hundred', 'thousand', 'million', 'billion'];

  var orig = num;
  num = JSON.stringify(num);
  var length = num.length;
  if (length >= 3) {
    var onesAndTens = num.slice(-2);
    var rest = num.slice(0, -2);
    console.log(rest);
    if (teens[onesAndTens] !== undefined) {
      var totalOnesTens = teens[onesAndTens];
    } else {
      var setTens = onesAndTens[0];
      var localTens = tens[setTens];
      var setOnes = onesAndTens[1];
      var localOnes = ones[setOnes];
      var totalOnesTens = `${localTens}-${localOnes}`;
      if (localOnes === '' || localTens === '') {
        if (localOnes === '' && localTens === '') {
          var formatHundredth = `${ones[rest]} ${above[0]}`;
          return formatHundredth;
        }
        if (localOnes === '') {
          totalOnesTens = `${localTens}`;
        }
        if (localTens === '') {
          totalOnesTens = `${localOnes}`;
        }
      }
    }

    var hundredths = rest[rest.length - 1]; // given string version of the number in the hundreds spot
    var formatHundredth = `${ones[hundredths]} ${above[0]}`;


    return `${formatHundredth} ${totalOnesTens}`
  }

  if (length === 1) {
    return ones[num];
  }
  if (length === 2) {
    // only check teens if teens[num] is defined << fix this
    if (teens[num] !== undefined) {
      return teens[num];
    } else {
      // build the string using tens place + ones place
      var setTens = num[0];
      var localTens = tens[setTens];
      var localOnes = ones[num[1]];
      if (localOnes === '') {
        return `${localTens}`;
      }
      return `${localTens}-${localOnes}`;
    }
  }
}



// frogs(10);
frogs(234);

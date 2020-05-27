function recite10LittleMonkeys(numberOfMonkeys){
  if (numberOfMonkeys < 2){   //prints the last verse
    lastVerse();
  }else{                      //otherwise recursively makes the rest of the poem
    getVerse(numberOfMonkeys);
    recite10LittleMonkeys(numberOfMonkeys - 1);
  }
};

function getVerse(numberOfMonkeys){
  var numToWord = getWordForNumber(numberOfMonkeys);   //converts the number of monkeys to its english word counterpart
  var capitalized = numToWord.charAt(0).toUpperCase() + numToWord.slice(1);    //Capitalization
  console.log(capitalized+ "little monkeys jumping on the bed,");
  console.log("One fell off and bumped his head,");
  console.log("Mama called the doctor and the doctor said,");
  console.log('"No more monkeys jumping on the bed!"');
  console.log();
};

function lastVerse(){
  console.log("One little monkey jumping on the bed,");
  console.log("He fell off and bumped his head,");
  console.log("Mama called the doctor and the doctor said,");
  console.log('"Get those monkeys right to bed!"');
};

function getWordForNumber(numberToConvert){  //converts an integer number in the range 0 to 10 ^ 12 to English.
  if(Math.abs(numberToConvert) >= 10**12){   //unless it's bigger. Then, it returns a silly phrase
    return "Oodles and Boodles"
  }
  var powersOfTen = ["", "thousand", "million", "billion"];
  var output = '';
  for (var i = 3; i >= 0; i--){     //goes over the number and breaks it down into triplets
    var triplet = numberToConvert % (10 ** (3 * i));
    triplet = numberToConvert - triplet;
    triplet /= 10 ** (3 * i);
    triplet %= 1000;
    if (triplet > 0){
      if(!(output === '')) {
        output += ', ';     //adds a grammatical comma
      }
      output += tripletConversion(triplet) + " " + powersOfTen[i];    //calls a function that converts a triplet into english
    }
  }
return output;

}

function tripletConversion(triplet){
  //resource of first 20 numbers
  var easyConversions = ["zero", "one", "two", "three", "four", "five",
                                  "six", "seven", "eight", "nine", "ten",
                                  "eleven", "twelve", "thirteen", "fourteen", "fifteen",
                                  "sixteen", "seventeen", "eighteen", "nineteen"];
  //resource of multiples of ten
  var decades = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  var output = '';
  var hundreds = Math.floor(triplet / 100); //gets the hundreds digit
  var tens = triplet % 100;
  tens = Math.floor(tens /10); //gets the tens digit
  var digits = triplet % 10;  //gets the digits
  if (hundreds > 0){ //this converts cases 1xx - 9xx
    output += easyConversions[hundreds] + "-" + "hundred";
  }
  if (tens > 1) {  //this converts cases x2x - x9x
    if(!(output === '')) {
      output += '-';
    }
    output += decades[tens]
    if (digits > 0 ) {
      output += "-" + easyConversions[digits];
    }
  } else if(digits > 0 | tens == 1){     //this converts cases xx1 - xx9 and case x10
    if(!(output === '')) {
      if(tens == 0){
        output += '-and-';
      }else {
        output += '-';
      }
    }
    output += easyConversions[triplet - (hundreds * 100)];

  }
  return output;
};

// recite10LittleMonkeys(10);

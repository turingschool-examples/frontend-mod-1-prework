/*
console.log the nursery rhyme
keep the line breaks
have the number of stanzas be the number of frogs-1
change number of frogs within
last 2 stanzas are different ending lines


I could not figure out a clean way to do the change to text numbers, it seems like installing a package would be easiest; at least for ANY number of frogs.
*/

function frogRhyme(numberOfFrogs) {
  let rhyme = ''
  for (let i = numberOfFrogs; i > 0; i--) {
    let number = i
    let oneLessNumber = i - 1
    let frogText = ' speckled frog sat on a log\neating some most delicious bugs.\nOne jumped in the pool where its nice and cool,\nthen there '

    if (i >= 3) {
      let stanza = number + frogText + 'were ' + oneLessNumber + ' speckled frogs!\n\n';
      rhyme += stanza
    } else if (i === 2) {
      let secondLastStanza = number + frogText + 'was ' + oneLessNumber + ' speckled frogs!\n\n';
      rhyme += secondLastStanza
    } else if (i === 1) {
      let lastStanza = number + frogText +  'were no more speckled frogs!';
      rhyme += lastStanza
    }
  };
  console.log(rhyme)
};

frogRhyme(10);


/*

1-19 are unique names, need to write them out each
to get the tens, hundreds, millions places, I can divide by ten and make conditionals
or I could split the number into digits and assign a prefix depending on the index
do I have to turn the number into a string to get individual digits and count length?

I'm out of time! So many nested if statements...

function wordNumbers(number) {
  if (number < 20) {
    if (number === 1) {
      return 'one'
    } else if (number === 2){
      return 'two'
    } else if (number === 3){
      return 'three'
    } else if (number === 4){
      return 'four'
    } else if (number === 5){
      return 'five'
    } else if (number === 6){
      return 'six'
    } else if (number === 7){
      return 'seven'
    } else if (number === 8){
      return 'eight'
    } else if (number === 9){
      return 'nine'
    } else if (number === 10){
      return 'ten'
    } else if (number === 11){
      return 'eleven'
    } else if (number === 12){
      return 'twelve'
    } else if (number === 13){
      return 'thirteen'
    } else if (number === 14){
      return 'fourteen'
    } else if (number === 15){
      return 'fifteen'
    } else if (number === 16){
      return 'sixteen'
    } else if (number === 17){
      return 'seventeen'
    } else if (number === 18){
      return 'eighteen'
    } else if (number === 19){
      return 'nineteen'
    }
  } else if (number >= 20) {
    if (number/10 < 10 ) {
      if ()
    }
  }

}

*/

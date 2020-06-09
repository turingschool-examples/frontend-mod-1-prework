function cipher(string, number) {
  var lowerCase = string.toLowerCase();
  var alphabet= 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';
  var string = '';

  for (var i = 0; i< lowerCase.length; i++) {
    var letterNow = lowerCase[i];
    if(letterNow ===" "){
      newString += letterNow;
      continue;
    }
    var indexNow = alphabet.indexOf(letterNow);
    var newIndex = indexNow + number;
    if(newIndex>25) newIndex = newIndex -26;
    if(newIndex<0) newIndex = newIndex+26;
    if(string[i] === string[i]||''.toUpperCase()) {
    newString += alphabet[newIndex]||''.toUpperCase();
    }
    else{
      newString += alphabet[newIndex];
    }
  }
  return newString
}
console.log(cipher('Hello World',5))
console.log(cipher('MJQQT BTWQI',-5))
console.log(cipher('With great power comes great repsonsibility', 10))
console.log(cipher('gsdr qbokd zygob mywoc qbokd bozcyxcslsvsdi', -10))
console.log(cipher('I am tired.',20))
console.log(cipher('c ug nclyx',-20))

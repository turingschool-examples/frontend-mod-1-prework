function encode(str, shifter) {
  str = str.toLowerCase();
  var encoded = ``;
  var container = [];
  for (var i = 0; i < str.length; i++) {
    var currLetter = str[i];
    var currCodeNum = currLetter.charCodeAt();
    container.push(currCodeNum);
  }
  for (var j = 0; j < container.length; j++) {
    var currCode = container[j];
    if (currCode < 96 || currCode > 123) {
      encoded += String.fromCharCode(currCode);
      continue;
    }
    currCode -= shifter;
    if (currCode >= 90 && currCode <= 96) {
      currCode -= 6;
    }
    encoded += String.fromCharCode(currCode);
  }
  return encoded.toUpperCase();
}

var output = encode('RAWR', 2); // PYUP
console.log(output);

var output = encode("Hello World", 5); //should log "CZGGJ RJMGY"
console.log(output);

var output = encode("Hi", 2); //should log "FG"
console.log(output);

var output = encode("abCdEF", 3); // XYZABC
console.log(output);

/*
abcefghijklmnopqrstuvwxyz
*/

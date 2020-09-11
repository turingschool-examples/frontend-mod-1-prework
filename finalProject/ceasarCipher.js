function encode(input, shiftValue) {
  let output = '';
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let shiftLetters = alphabet.slice(- shiftValue);
  let cipher = shiftLetters + alphabet;
  for ( let i = 0; i <= input.length - 1; i++ ) {
    let caps = input.toUpperCase();
    let match = alphabet.indexOf(caps[i]);
    if (match != -1) {
    output += cipher.charAt(match);
    } else {
    output += caps[i];
    }
  }
  console.log(output);
};

encode ('Hello World', 5);
encode ('Hi', 2);

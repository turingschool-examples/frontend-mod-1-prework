/*var alphaUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var alphaLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

/*for(i = 0; i <= 25; i++) {
  console.log(alphaUpper[i+5]);
}*/

function caeserCipher(str) {
  var cipherKey = {
    A: "C", B: "D", C: "E", D: "F", E: "G", F: "H", G: "I", H: "J", I: "K",
    J: "L", K: "M", L: "N", M: "O", N: "P", O: "Q", P: "R", Q: "S", R: "T",
    S: "U", T: "V", U: "W", V: "X", W: "Y", X: "Z", Y: "A", Z: "B",
    a: "C", b: "D", c: "E", d: "F", e: "G", f: "H", g: "I", h: "J", i: "K",
    j: "L", k: "M", l: "N", m: "O", n: "P", o: "Q", p: "R", q: "S", r: "T",
    s: "U", t: "V", u: "W", v: "X", w: "Y", x: "Z", y: "A", z: "B", " ": " "
  }
  var cipher = "";
  for(i = 0; i < str.length; i++) {
    cipher += cipherKey[str[i]];
  }
  return cipher;
}

console.log(caeserCipher("Hello World"));

var alphabetPositions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"];

class CaesarCipher {
  constructor(randomString) {
    this.randomString = randomString;
  }

  encode(userString, shiftValue) {
    this.randomString = userString;
    console.log(this.randomString);
    //some code to shift each letter in the string by alphabet position, accessed from the array
  }
};

var cipher = new CaesarCipher();
cipher.encode("I love my dog more than I love most people.", 4);

//I got stuck on this one, and after some intense Googling, I decided to try the checker board challenge
//Please count the checker board challenge for credit, as I will come back to caesar cipher after the deadline!

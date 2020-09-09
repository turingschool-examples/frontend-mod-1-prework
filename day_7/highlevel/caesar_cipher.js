class Cipher {
    constructor(str, num) {
        this.str = str;
        this.num = num;
    }

    mystery(str, num) {
        for (var i = 0; i < this.str.length; i++) {
            var alphabet = "abcdefghijklmnopqrstuvwxyz"
            alphabet = alphabet.split("");

            var encodedStr = " ";
            
            var currentLetter = this.str[i];

            if (currentLetter === " ") {
                encodeStr += currentLetter;
                continue;
            }
// should I use the array.prototype.replace(x,y) somewhere? 
            var currentIndex = alphabet.indexOf(currentLetter);

            var encodedIndex = currentIndex + this.num;

            if (encodedIndex > 25) {
                encodedIndex = encodedIndex - 26;
            }

            if (encodedIndex < 0) {
                encodedIndex = encodedIndex + 26;
            }

            if (this.str[i] === this.str[i].toUpperCase()) {
                encodedStr += alphabet[encodedIndex].toUpperCase();
            } else
                encodedStr += alphabet[encodedIndex].toUpperCase();
        }
    }
}

var myCipher = new Cipher("This is a test", 2);
console.log(myCipher);

myCipher.mystery();

// I was able to create an instance of this class, but struggled completing the method. I tried mutliple ways, watched Youtube, googled. I would try to isolate each portion with a simplified version in attempts to see what needed to be changed or improved upon. I have tried new techniques that I'm not fully confident that I understand. I tried using the %26 as a way instead to shift the characters, but settled on this for now. 
// I felt it important to document my struggle for my own acknowledgment. 
// Tomorrow is passed the deadline, but tomorrow is another chance for me to struggle again. 
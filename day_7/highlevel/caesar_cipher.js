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

function CaesarCipher(str, num) {
    str = str.toLowerCase();
    var result = " ";
    var charcode = 0;

    for (i = 0; i < str.length; i++) {
        charcode = (str[i].charCodeAt()) + num;
        result += String.fromCharCode(charcode);
    }

    return result;
}

console.log(CaesarCipher("How I love days like this.", 2));

// this kinda got me there, but then because of how charCode is laid out, it doesn't imply I'll be getting only the latin alphabet back
// thus, I need to create a parameter that prevents my code from going overboard. 

class shiftyCipher {
    function (str, num) {
        if (num < 0) {
            return shiftyCipher(str, num + 26);
            //accounting for letters of the alphabet
        }
        var userCipher = " ";
        //empty string to put new cipher into

        for (var i = 0; i < str.length; i++) {
            var currentLetter = str[i]

            if (currentLetter.match(/[a-z]/i)) {
                //should it be A-Za-z instead? to avoid the need to worru about upper or lowercase? 
                var coded = str.charCodeAt(i);
                
                //but need something to solve the problem of getting back non alphabetic symbols & if its upper or lower case

                if (coded >= 65 && coded <= 90) {
                    currentLetter = String.fromCharCode(((coded - 65 + num) % 26) + 65);
                }

                else if (coded >= 97 && coded <= 122) {
                    currentLetter = String.fromCharCode(((coded - 97 + num) % 26) + 97);
                }
                    // String.fromCharCode() converts the pulled data into one string to create meaningful informaton 
                }
                
                userCipher += currentLetter;
            }
            return userCipher;
        }
        
    }

    var myCipher = new shiftyCipher();
    console.log(myCipher.function("This is a test", 5));

    //this seems to work much better; I still like the idea of some how avoiding having the additional complication of the upper & lower case. *** tried to manipulate it and didn't get the same results; I recieved only "T" back.
    //also, unsure if having a class is redundant. Maybe just as a function is all that is needed. **tried is without the class, didn't seem to work as well. 


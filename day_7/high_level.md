#Ceasar Cipher

##Prompt
Also known as a shift cipher, the Ceasar Cipher is one of the oldest and simplest encoding techniques.  A Ceasar Cipher works by shifting the alphabet by a set number of letters down the alphabet.  For example, with a left shift of 3, 'D' would be replaced by 'A', 'E' would be replaced by 'B', and so on.  See below for a full alphabet example with a left shift of 3:

```
plain:  ABCDEFGHIJKLMNOPQRSTUVWXYZ
cipher: XYZABCDEFGHIJKLMNOPQRSTUVW
```

Create a file named `caesar_cipher.js` and within that file, write a program that will take any string, and encode it based on a shift value provided by the user.  The interaction pattern for this program might look something like this:

```javascript
var cipher = new CeasarCipher();
cipher.encode("Hello World", 5); //should log "CZGGJ RJMGY"
```

##Solution
1. *Think through it. What are my initial ideas for a solution?*
-Here was my thought process: "Maybe I can change each letter into an integer and then adjust that integer to the desired shift, and then turn that integer back into another letter. This seems overly cumbersome so I'm going to do some research before going down that track."

2. *Google and research*
-I started by googling "Ceasar Cipher javascript" which led me to this: https://stackoverflow.com/questions/44232645/caesar-cipher-in-javascript.
-Looked up String.prototype.charCodeAt() in MDN.
-Looked up ASCII code unit on stackoverflow.
-Looked up rot13 javascript.
-Watched https://www.youtube.com/watch?v=esbO8RayrCI. This video helped me understand that for the example of shift 3 in the prompt, letters D (68 in ASCII code) through Z (90) you need to subtract 3. But for letters A (65) through C (67), you need to add 23. Also, the absolute value of the number you're subtracting and the number you're adding will always sum to 26 because there are 26 letters in the alphabet. So to create an algorithm, I'm going to create a variable called leftShiftValue that will be the amount that we need to shift to the left or 3 for this example. Then the range that needs to have the leftShiftValue substracted from is going to be (65 + leftShiftValue) to 90. And the range that needs to have (26 - leftShiftValue) added to it is 65 to (65 + leftShiftValue - 1). This will be written in an if, else statement. So now that I have a place to start...

3. *Start working through the code piece by piece"*
-First, I worked on defining the ranges because I know the later section of the alphabet will need shifted by adding to the ASCII code number and some will need shifted by subtracting from it. I did this for both capital and lowercase letters and wrote the if and else if instructions for each section. I also included an else statement for all other characters so that things like punctuation and spaces will still transfer over.
-Once I had these ranges and if, else if, and else statements written, I formatted them inside of a for loop that is inside the function caesarCipher(str). The loop is set to initialize at the first character, i = 0, and then keep running until the end of the string, i < str.length, for each subsequent character.
-This will work for any shift value because the if and else if statements call for the variable I have defined as leftShiftValue. So you can change the value for this variable and it will change the output.
-Finally I called the function caesarCipher() in order to have the console log the result.


```javascript
var leftShiftValue = 5

function caesarCipher(str) {
  var arr = [];

  for (i = 0; i < str.length; i++) {

    if (str.charCodeAt(i) >= 65 + leftShiftValue && str.charCodeAt(i) <= 90) {
      arr.push(String.fromCharCode(str.charCodeAt(i) - leftShiftValue));
    }
    else if (str.charCodeAt(i) >= 97 + leftShiftValue && str.charCodeAt(i) <= 122) {
      arr.push(String.fromCharCode(str.charCodeAt(i) - leftShiftValue));
    }
    else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 65 + leftShiftValue) {
      arr.push(String.fromCharCode(str.charCodeAt(i) + 26 - leftShiftValue));
    }
    else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 97 + leftShiftValue) {
      arr.push(String.fromCharCode(str.charCodeAt(i) + 26 - leftShiftValue));
    }
    else if (str.charCodeAt(i) < 65){
      arr.push(str[i]);
    }
  }
  console.log(arr.join(""))
}

caesarCipher("Hello, world!")
```

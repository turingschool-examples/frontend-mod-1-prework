## My first look at this
* declare an empty string to put the letters into as they're encoded
* loop through the string, checking for letters 
* (how does it deal with spaces and punctuation, and not changing them?)
* then for letters, add/subtract the number of spaces passed in as a parameter, and output the 
* letter that corresponds to that unicode number.
* need to use regex to search for letters
* need to know the values of the letters (I think there's a unicode for each letter??)
* need to consider capital letters vs lower case letters

## Second look
I was looking into the Caesar Cipher again and found a number of solutions. I couldn't un-see them, so I thought I would 
go through the one I liked the best, and discuss why I like it. It happens to be the first one I found in googling. There 
were other solutions that were shorter, longer, etc., but this one made the most sense to me and forced me to review some 
topics I've successfully avoided for at least a year or two.

I am using the solution found here:  [https://gist.github.com/EvanHahn/2587465](https://gist.github.com/EvanHahn/2587465)

Version with my own comments: 
```javascript
var caesarShift = function (str, amount) {
  // this if block will adjust for negative numbers (a shift to the left instead of right)
  if (amount < 0) {
    return caesarShift(str, amount + 26); 
  }

  var output = "";  // creates a new string to build onto

  // this for loop goes through each character in the string, 
  for (var i = 0; i < str.length; i++) {
    var c = str[i];
    if (c.match(/[a-z]/i)) {  // Regex to check if the character is a letter,
      var code = str.charCodeAt(i);  // and if it is, gets the code for the letter.
      if (code >= 65 && code <= 90) {   // these are codes for upper case letters
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      } else if (code >= 97 && code <= 122) {   // these are codes for lower case letters
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    } // if the Regex doesn't find a letter, it just adds the character and then moves to the next character, so
// that no characters are lost -- keeps track of punctuation, spaces, etc.
    output += c;
  }
  return output;
};
```

### Discussion:  
   First and foremost, I wanted to avoid nested for loops. They always confuse me and get me all discombobulated. I liked 
   Evan's solution because he didn't use nested for loops, and he used `String.fromCharCode()` and `charCodeAt()` and I 
   wanted to learn more about those. He also uses Regex and modulo, which I can always use more exposure to. 
   He is using ASCII codes for letters, both lower and upper case. `String.fromCharCode()` will get the code for the given 
   character and `.charCodeAt()` will get the character for the given code. But the codes for letters are not just 1-26, 
   they go up to 97 because there are separate codes for upper and lower. This means he doesn't have to deal with changing case later. 
   Using Regex means he doesn't have to deal with spaces and punctuation separately, as the Regex search is only looking for 
   letters in the alphabet. 
   Math -- ok, so once he has the ascii code for the letter, he does some math on it. First he subtracts 65 (or 97), to bring it 
   into the range of the regular alphabet (1-26, but this is actually by index which is 0-25), and then he adds the shift amount. 
   Then he mods (modulo) by 26. This means dividing it by 26 and there is no remainder. I had to do some research to 
   understand why he did this. I guess this assures that it is kept inside the range of the alphabet??? I did some testing 
   and this modulo helps keep the conversion accurate with negative shifts. Without the modulo, the conversion gets mangled 
   when converting back to a letter.
   Then add in the 65 back (to convert back to ascii). The outcome of this math is the 
   new letter. After each iteration, which is a letter conversion, he adds the letter to the output string.
   
   Overall, I found this a really good review of advanced techniques and methods that I haven't looked at for a while. I've 
   always avoided Caesar Cipher because I thought it was over my head. I see now, by breaking it down, that it's just a 
   number of simple enough steps. 
   
   
### Resources:
* [String.fromCharCode()](https://www.w3schools.com/jsref/jsref_fromcharcode.asp)
* [charCodeAt](https://www.w3schools.com/jsref/jsref_charcodeat.asp)
* [Regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
* [Modulo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
* [ASCII codes](https://www.w3schools.com/charsets/ref_html_ascii.asp)

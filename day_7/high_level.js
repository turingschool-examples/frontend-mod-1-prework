/*
I included this code to test myself, but I have the required write up in high_level.md

This example seemed really strange as a class but I wanted to mimmick the prework screen shot of
how the code should be called.
*/

class CeaserCiper {

  encode(str, num) {
      //create out variables
      var output = ''
      var u = ''
      var result = ''
        //the for loop will iterate through each string element
        for (var i = 0; i < str.length; i++) {
          //get the ASCII code for our letter
          u = str.charCodeAt(i)
            //If it is a capital letter:
            if (u <= 90 && u >= 65 ) {
              //Apply the shift
              u = u + num
              //This wraps us back around the alphabet if our shift goes past Z
              if (u > 90) {
                u = u - 26
              }
            //Put our ASCII number back into a capital letter
            result = String.fromCharCode(u)
            //Check if we're dealing with lower case
            } else if (u >= 97 && u <= 122) {
              //Apply the shift
              u = u + num
              //Same wrap technique
              if (u > 122) {
                u = u - 26
              }
            //Back to lowercase letter
            result = String.fromCharCode(u)
        //If it's a space, we keep the space
        } else if (u == 32) {
          result = String.fromCharCode(32)
        //We are not including letters or special numbers. This will terminate the loop once found.
        } else {
          return "Letters and spaces only please."
        }
      //Append our output string
      output += result
      }
    //Let's see that beautiful encoded string
    console.log(output);
  }
}

var cipher = new CeaserCiper()
cipher.encode("ASD asfda2e asda", 3);

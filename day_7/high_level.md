## Ceasar Cipher
Based on the results we're looking for...
```
var cipher = new CeasarCipher();
cipher.encode("Hello World", 5); //should log "CZGGJ RJMGY"
```
... we know we need to build CeasarCipher as a class and encode as a method within that class. Encode should take in two parameters, the string we're encoding and the number by which we're shifting left. It should then iterate over the characters in the string, changing each one by the degree specified. Lastly I'd make all the letters capitalized, and return the string.

UPDATE: After a lot of googling and a long break I finally have a working version of this code. I want to amend my explanation to include one step I didn't see coming, that I struggled to figure out.

There is not native logic to JavaScript that allows us to shift letters, and in building this function myself I had to convert the characters to unicode. This lead to a few changes. First I had to capitalize the string up front to keep everything in the right range for unicode values. Then, while iterating over the string, I had to test if the index of the string I was on was a letter. If it was I had to convert it to unicode, shift the unicode value, correct this value to make sure it was still within the range for capital letters, and then add the character to a new string. At the end of the method I logged this new string to the console. I'll include my code below. I've also included the file in which I built this code, ceasar_cipher.js, in this directory.
```
class CeasarCipher{
  encode(string, leftShift){
    var result = ""
    string = string.toUpperCase()
    for (var i=0; i<string.length; i++){
      var newCode = string.charCodeAt(i) - leftShift
      if (newCode < 65){
        newCode +=26
      }
      if (newCode > 90){
        newCode -= 26
      }
      if ((/[A-Z]/).test(string[i])){
        var letter = String.fromCharCode(newCode)
      }else{
        var letter = string[i]
      }
      result += letter
    }
  console.log(result)
  }
}
```


### Update 9/9:
As I helped a couple classmates with Day 7 exercises I noticed some ways my code could be a bit cleaner so I made small edits to some of the files. I also gave the Checkerboard problem a shot, and you can find my code for that in checker_board.js

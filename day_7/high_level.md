# How I would solve Ceasar Cipher problem
1. Assuming we made an object CeasarCipher object of a class, I'll make a class named CeasarCipher
2. Learn about ASCII values
3. Assuming encode is a function, i will create an encode function with parameter str
4. Using for loop I will make my code read every character and convert character(capital) to its decimal value
5. At the end I will use the given code to shift character by five

### Solution to Ceasar Cipher problem
```
class CeasarCipher {  
  encode(str){  
    var result = "";
    for(var i = 0; i<str.length; i++){
      var asciiValue = str[i].charCodeAt();
      if(asciiValue >= 65 && asciiValue <= 84){
        result += String.fromCharCode(asciiValue + 5);
      }
      else if (asciiValue >= 85 && asciiValue <= 90){
        result += String.fromCharCode(asciiValue - 21);
      }
      else {
        result += str[i];
      }
    }return result;
  }
}
var cipher = new CeasarCipher();
cipher.encode("CZGGJ RJMGY");
```

# How I would solve Checker Board problem
1. First I will get size of the Checker board from the user using prompt
2. Create a variable to store "x" for black and " " for white box for the Checker board
3. Using first for loop I will make the rows and columns with second for loop
4. Inside the for loop I will use if statement using even and odd concept to determine if X or the empty string is going to be printed
5. After every for loop with variable j it will go to the next line (depending on the board size)

### Solution to Checker Board problem
```
var boardSize = prompt("Enter the size of the Checker Board: ");
var boxType = "";
for (var i = 1; i < boardSize; i++) {
    for(var j = 1; j < boardSize; j++) {
        if (i % 2 === 0) {
            boxType += " " ;
            boxType += "X";
        }
        else {
            boxType += "X";
            boxType += " " ;
        }
    }
    boxType += "\n";
}
console.log(boxType);
```

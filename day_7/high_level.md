## Caesar Cipher

**Identify the objective**

Create a code that will apply a shift value provided by the user,
to any string inputted by the user.*

**Understanding `Ceasar Cipher`**

* Cipher works by shifting the alphabet by a set number of letters down the alphabet.
* the set number - identifies where the shift will begin
  * 0 = A, 1 = B, 2 = C, 3 = D, ...
* the shift can be coded to shift `left` or `right`
* the shift does not shift the letters in a string, but the changes the value of each letters
  * Example - `("Kevin", 3) = "Hbsfk" / ("Kevin") != "vinKe"`
* Ceaser Cipher is also known as `shift cipher`


**Psuedocode**
_in reference to (ceasar_cipher.mg) example:_

```javascript
var cipher = new CeasarCipher();
cipher.encode("Hello World", 5); //should log "CZGGJ RJMGY"
```

1. Create a CeaserCipher(string, value) class
2. Create a constructor with the following properties & functions
    * function - identify the alphabet, and where to shift using a loop.
    * function - encode () _(what does this look like?)_ for i= x this.shiftValue.charShift(_research_) & console.log(cipherString)
    * key - "string" _this.string
    * key - shiftValue _this.shiftValue
    *
3. Create new object for CeasarCipher class
4. Input values for new object
    * ("This is the string") , 10
5. Log for outcome
6. Input another object with new values to test functionality
7. If everything logs correctly, create a new object userInput leaving (//put your string here, integer here).

**Questions/Comments**

* Are there actual expressions or methods preset that could assist in this?
* What happens if the users string input includes a number?
  * Could I include a function for numbers?
  * Does Ceasar Cipher work for numbers?

============================================================================================================

## Checker Board

**Identify the objective**
Create a checker board. Black spaces are represented by `X` and white `" "`. Create a program that will log a checker board with a size indicated by the user.

**Thoughts**
* A checker board is a **grid**, define what a grid looks like
  * a grid is made of rows, rows must contain `white` and `black` and `white`/`black` must alternate
* calculating `area` will play a big part in creating the checker board
  * in this case the user input is `size` indication `area` would be size*size
* This could be a similar code to `fizzbuzz`, but create a loop of alternating `X` & `" "`

**Psuedocode**

1. Create a CheckerBoard (size) class
2. constructor
    * this.size: size
    * `printBoard` function() - loop
3. create an object `board1` assign `size`
4. board1.printBoard();

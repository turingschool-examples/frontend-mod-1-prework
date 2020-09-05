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
